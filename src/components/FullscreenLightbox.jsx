import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

export default function FullscreenLightbox({ project, initialIndex = 0, onClose }) {
  const screenshots = project?.screenshots || [];
  const [activeIdx, setActiveIdx] = useState(initialIndex || 0);

  // Zoom & Pan states
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const panStartRef = useRef({ x: 0, y: 0 });

  // Touch Swipe states
  const [swipeOffset, setSwipeOffset] = useState(0);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
  const lastTapRef = useRef(0);
  const pinchStartDistRef = useRef(null);
  const initialPinchZoomRef = useRef(1);

  const resetZoomAndPan = useCallback(() => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setSwipeOffset(0);
    setIsDragging(false);
  }, []);

  useEffect(() => {
    setActiveIdx(initialIndex || 0);
    resetZoomAndPan();
  }, [initialIndex, project, resetZoomAndPan]);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    resetZoomAndPan();
    setActiveIdx((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length, resetZoomAndPan]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    resetZoomAndPan();
    setActiveIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length, resetZoomAndPan]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && zoomLevel === 1) {
        nextImage();
      } else if (e.key === 'ArrowLeft' && zoomLevel === 1) {
        prevImage();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel((prev) => Math.min(prev + 0.5, 2.5));
      } else if (e.key === '-') {
        setZoomLevel((prev) => Math.max(prev - 0.5, 1));
      } else if (e.key === '0') {
        resetZoomAndPan();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, zoomLevel, nextImage, prevImage, resetZoomAndPan]);

  const toggleDoubleTapZoom = () => {
    if (zoomLevel > 1) {
      resetZoomAndPan();
    } else {
      setZoomLevel(2);
      setPan({ x: 0, y: 0 });
    }
  };

  const getTouchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      pinchStartDistRef.current = getTouchDistance(e.touches);
      initialPinchZoomRef.current = zoomLevel;
      return;
    }
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        toggleDoubleTapZoom();
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;
      touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: now };

      if (zoomLevel > 1) {
        setIsDragging(true);
        dragStartRef.current = { x: touch.clientX, y: touch.clientY };
        panStartRef.current = { ...pan };
      } else {
        setSwipeOffset(0);
      }
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchStartDistRef.current) {
      const currentDist = getTouchDistance(e.touches);
      const ratio = currentDist / pinchStartDistRef.current;
      let newZoom = initialPinchZoomRef.current * ratio;
      newZoom = Math.min(Math.max(newZoom, 1), 2.8);
      setZoomLevel(newZoom);
      if (newZoom === 1) setPan({ x: 0, y: 0 });
      return;
    }

    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      if (zoomLevel > 1) {
        const moveX = touch.clientX - dragStartRef.current.x;
        const moveY = touch.clientY - dragStartRef.current.y;
        const maxPanX = (zoomLevel - 1) * 240;
        const maxPanY = (zoomLevel - 1) * 240;
        const newX = Math.min(Math.max(panStartRef.current.x + moveX, -maxPanX), maxPanX);
        const newY = Math.min(Math.max(panStartRef.current.y + moveY, -maxPanY), maxPanY);
        setPan({ x: newX, y: newY });
      } else {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          setSwipeOffset(deltaX);
        }
      }
    }
  };

  const handleTouchEnd = () => {
    pinchStartDistRef.current = null;
    setIsDragging(false);
    if (zoomLevel === 1) {
      if (swipeOffset < -45 && screenshots.length > 1) {
        nextImage();
      } else if (swipeOffset > 45 && screenshots.length > 1) {
        prevImage();
      }
      setSwipeOffset(0);
    }
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      panStartRef.current = { ...pan };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      e.preventDefault();
      const moveX = e.clientX - dragStartRef.current.x;
      const moveY = e.clientY - dragStartRef.current.y;
      const maxPanX = (zoomLevel - 1) * 280;
      const maxPanY = (zoomLevel - 1) * 280;
      const newX = Math.min(Math.max(panStartRef.current.x + moveX, -maxPanX), maxPanX);
      const newY = Math.min(Math.max(panStartRef.current.y + moveY, -maxPanY), maxPanY);
      setPan({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!project || screenshots.length === 0) return null;

  return (
    <div className="pro-lightbox-overlay">
      {/* 1. TOP TOOLBAR - DEDICATED, SEPARATE, NO OVERLAPPING TITLE */}
      <header className="pro-lightbox-header" onClick={(e) => e.stopPropagation()}>
        {/* Left: Navigation and Counter */}
        <div className="pro-lightbox-nav-cluster">
          {screenshots.length > 1 && (
            <div className="pro-nav-buttons">
              <button
                type="button"
                className="pro-nav-arrow-btn"
                onClick={prevImage}
                title="Previous (Left Arrow)"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="pro-nav-arrow-btn"
                onClick={nextImage}
                title="Next (Right Arrow)"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
          <span className="pro-counter-badge">
            {activeIdx + 1} / {screenshots.length}
          </span>
        </div>

        {/* Center: Zoom Controls */}
        <div className="pro-zoom-dock">
          <button
            type="button"
            className="pro-zoom-btn"
            onClick={() => setZoomLevel((p) => Math.max(p - 0.5, 1))}
            disabled={zoomLevel <= 1}
            title="Zoom Out (-)"
          >
            <ZoomOut size={15} />
          </button>

          <button
            type="button"
            className={`pro-zoom-btn pro-zoom-reset ${zoomLevel > 1 ? 'is-active' : ''}`}
            onClick={resetZoomAndPan}
            title="Reset Zoom"
          >
            {zoomLevel > 1 ? (
              <>
                <RotateCcw size={13} />
                <span>{Math.round(zoomLevel * 100)}%</span>
              </>
            ) : (
              <span>100%</span>
            )}
          </button>

          <button
            type="button"
            className="pro-zoom-btn"
            onClick={() => setZoomLevel((p) => Math.min(p + 0.5, 2.5))}
            disabled={zoomLevel >= 2.5}
            title="Zoom In (+)"
          >
            <ZoomIn size={15} />
          </button>
        </div>

        {/* Right: Close Button */}
        <button
          type="button"
          className="pro-close-pill"
          onClick={onClose}
          title="Close (Esc)"
        >
          <X size={17} />
          <span>Close</span>
        </button>
      </header>

      {/* 2. MAIN VIEWPORT - DEDICATED STAGE, NO FORCED ASPECT RATIO */}
      <main
        className="pro-lightbox-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={toggleDoubleTapZoom}
      >
        <div
          className="pro-image-canvas"
          style={{
            transform: zoomLevel > 1
              ? `scale(${zoomLevel}) translate(${pan.x / zoomLevel}px, ${pan.y / zoomLevel}px)`
              : `translateX(${swipeOffset}px)`,
            transition: isDragging || swipeOffset !== 0 ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
        >
          <img
            src={screenshots[activeIdx]}
            alt={`Screenshot ${activeIdx + 1}`}
            className="pro-screenshot-display"
            draggable={false}
          />
        </div>
      </main>

      {/* 3. BOTTOM THUMBNAILS STRIP */}
      {screenshots.length > 1 && (
        <footer className="pro-lightbox-footer" onClick={(e) => e.stopPropagation()}>
          <div className="pro-thumbnails-strip">
            {screenshots.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                className={`pro-thumb-card ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => { setActiveIdx(idx); resetZoomAndPan(); }}
                title={`Screenshot ${idx + 1}`}
              >
                <img src={imgUrl} alt={`Thumb ${idx + 1}`} />
              </button>
            ))}
          </div>
        </footer>
      )}
    </div>
  );
}
