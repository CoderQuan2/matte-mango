import { useState } from 'react'
import './App.css'

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      alert('Download complete! (Simulated)');
    }, 1500);
  };

  return (
    <div className="container">
      <main className="content">
        <h1>Geotemporal Hydrodynamics</h1>
        <h2>The Unified Fluid Theory</h2>
        <p className="author">By T. Abram (March 2026)</p>

        <section className="abstract">
          <h3>Abstract</h3>
          <p>
            Geotemporal Hydrodynamics (GTH) proposes that spacetime is a macroscopic quantum superfluid
            rather than an empty geometric manifold. The framework is motivated by the vacuum-energy
            inconsistency between Quantum Field Theory and standard cosmology, and models the vacuum as a 5D
            viscoelastic substrate with order parameter Ψ = ρe^iθ.
          </p>
          <p>
            In this picture, particles are not point objects but stable topological defects (GeoKnots),
            while gravity emerges as the long-wavelength acoustic response of the substrate.
          </p>
        </section>

        <div className="download-section">
          {/* UX Enhancement: Accessible download button with loading state and focus styles */}
          <button
            className="download-btn"
            onClick={handleDownload}
            disabled={isDownloading}
            aria-label={isDownloading ? "Downloading PDF..." : "Download full PDF document"}
            aria-busy={isDownloading}
          >
            {isDownloading ? (
              <span className="flex-center">
                <svg className="spinner" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Downloading...
              </span>
            ) : (
              <span className="flex-center">
                <svg className="icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </span>
            )}
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
