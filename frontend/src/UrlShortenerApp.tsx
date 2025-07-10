import { useEffect, useState } from 'react';
import './App.css';

interface Url {
  _id: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
}

function UrlShortenerApp() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [urls, setUrls] = useState<Url[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/urls');
      const data = await res.json();
      setUrls(data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl.trim()) return;

    setIsLoading(true);
    try {
      await fetch('http://localhost:5000/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl }),
      });
      setOriginalUrl('');
      fetchUrls();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (shortUrl: string) => {
    try {
      await navigator.clipboard.writeText(`http://localhost:5000/${shortUrl}`);
      setCopiedUrl(shortUrl);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  // ...existing code...
return (
  <div className="app">
    <nav className="navbar">
      <a href="/" className="navbar-logo">LinkShrinker</a>
      <div className="navbar-links">
        {/* Add more links here if needed */}
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>

    <form onSubmit={handleSubmit} className="form-section">
      <input
        type="url"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter long URL"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Shortening...' : 'Shorten'}
      </button>
    </form>

    <div className="urls-list">
      <h2>Your URLs</h2>
      {urls.map((url) => (
        <div key={url._id} className="url-item">
          <p><strong>Original:</strong> {url.originalUrl}</p>
          <p>
            <strong>Short:</strong>{' '}
            <a
              href={`http://localhost:5000/${url.shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              localhost:5000/{url.shortUrl}
            </a>
            <button onClick={() => copyToClipboard(url.shortUrl)} className="copy-btn">
              {copiedUrl === url.shortUrl ? 'Copied!' : 'Copy'}
            </button>
          </p>
        </div>
      ))}
    </div>
  </div>
);
}

export default UrlShortenerApp;
