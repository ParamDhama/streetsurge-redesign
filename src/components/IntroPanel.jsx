import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

// CustomPath class: builds a polyline from source → intermediate points → destination.
class CustomPath {
  constructor(source, destination, intermediatePoints = []) {
    this.source = source;
    this.destination = destination;
    // Build the complete polyline.
    this.points = [source, ...intermediatePoints, destination];
    this.totalLength = this.calculateTotalLength();
  }

  // Calculate the total Euclidean distance of the polyline.
  calculateTotalLength() {
    let length = 0;
    for (let i = 1; i < this.points.length; i++) {
      const dx = this.points[i].x - this.points[i - 1].x;
      const dy = this.points[i].y - this.points[i - 1].y;
      length += Math.sqrt(dx * dx + dy * dy);
    }
    return length;
  }
}

const FullScreenMultiplePathsAnimation = () => {
  const canvasRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  // Disable scrolling while the intro is active.
  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showIntro]);

  // Hide the intro panel after 5 seconds.
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Set canvas to full screen.
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const width = canvas.width;
    const height = canvas.height;

    // Create multiple paths using a for-loop.
    const pathCount = 10; // Adjust number of paths as needed.
    const paths = [];
    // We'll vary the paths by using a fixed design.
    const pathsDesign = [
      // Path 1: Diagonal from bottom left to near top right.
      {
        // Source starts at the bottom left.
        source: { x: -10, y: height - 20 },
        // Destination is modified to avoid the top-right reserved area.
        destination: { x: width - 50, y: 20 },
        intermediatePoints: [
          { x: 20, y: height - 20 },
          { x: 20, y: 20 },
          { x: -10 + Math.floor(width / 4), y: 20 },
          { x: -10 + Math.floor(width / 4), y: 20 + Math.floor(height / 3) },
          { x: Math.floor(width / 2), y: 20 + Math.floor(height / 3) },
          { x: Math.floor(width / 2), y: Math.floor(height / 2) },
          { x: Math.floor((width * 3) / 4), y: Math.floor(height / 2) },
          { x: Math.floor((width * 3) / 4), y: Math.floor((height * 3) / 4) },
          { x: width - 50, y: Math.floor((height * 3) / 4) }
        ]
      },
      // Path 2: Reverse diagonal from top left to bottom right.
      {
        source: { x: -10, y: 20 },
        // Destination remains safely away from the top-right zone because y is high.
        destination: { x: width + 10, y: height - 20 },
        intermediatePoints: [
          { x: 20, y: 20 },
          { x: 20, y: height - 20 },
          { x: Math.floor(width / 4), y: height - 20 },
          { x: Math.floor(width / 4), y: Math.floor(height / 2) },
          { x: Math.floor(width / 2), y: Math.floor(height / 2) },
          { x: Math.floor((width * 3) / 4), y: Math.floor(height / 2) },
          { x: Math.floor((width * 3) / 4), y: height - 20 },
          { x: width - 20, y: height - 20 }
        ]
      },
      // Path 3: Horizontal wave across the center.
      {
        source: { x: 0, y: height / 2 },
        destination: { x: width, y: height / 2 },
        intermediatePoints: [
          // The wave peaks avoid the top-right reserved area since y remains around mid-screen.
          { x: Math.floor(width / 4), y: height / 2 - 50 },
          { x: Math.floor(width / 2), y: height / 2 + 50 },
          { x: Math.floor((width * 3) / 4), y: height / 2 - 50 }
        ]
      }
    ];
    

    // Create multiple instances using the design.
    // Here we'll create multiple CustomPath instances by reusing the same design.
    pathsDesign.forEach((design) => {
      for (let i = 0; i < pathCount; i++) {
        // Optionally, you can vary the design slightly here using i.
        paths.push(new CustomPath(design.source, design.destination, design.intermediatePoints));
      }
    });

    let startTime = null;
    const duration = 3000; // Total animation duration in ms.

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Fill the background.
      ctx.fillStyle = '#1a202c'; // Tailwind gray-900.
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each path with a dash animation.
      paths.forEach((customPath) => {
        ctx.beginPath();
        ctx.moveTo(customPath.points[0].x, customPath.points[0].y);
        for (let i = 1; i < customPath.points.length; i++) {
          ctx.lineTo(customPath.points[i].x, customPath.points[i].y);
        }
        ctx.lineWidth = 10;
        ctx.lineCap = 'round'; // round line endpoints
        ctx.lineJoin = 'round'; // round corners
        ctx.strokeStyle = '#fff';
        ctx.setLineDash([customPath.totalLength]);
        ctx.lineDashOffset = customPath.totalLength - progress * customPath.totalLength;
        ctx.stroke();
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[150]"
          initial={{ opacity: 1 , y : 0}}
          animate={{ opacity: 1 , y : 0}}
          exit={{ opacity: 0.5 , y : -1000}}
          transition={{ duration: 1 }}
          style={{ pointerEvents: 'all', touchAction: 'none' }}
        >
          <canvas ref={canvasRef} className="block" style={{ display: 'block' }} />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-10 right-10 md:top-40 md:right-40 sm:top-20 sm:right-20 sm:text-9xl text-6xl text-white font-bold"
          >
            SS
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMultiplePathsAnimation;
