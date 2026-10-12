import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ', r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  if (!needRefresh) return null;

  return (
    <div style={{
      position: 'fixed', top: '20px', right: '20px', zIndex: 1000,
      background: '#242424', color: 'white', padding: '16px',
      borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex', flexDirection: 'column', gap: '10px'
    }}>
      <p style={{ margin: 0 }}>New content available, click on reload button to update.</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => updateServiceWorker(true)} style={{ background: '#646cff', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
          Reload
        </button>
        <button onClick={() => setNeedRefresh(false)} style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </div>
  );
}

export default UpdatePrompt;