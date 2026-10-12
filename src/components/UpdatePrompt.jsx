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
    <div className="fixed top-5 right-5 z-[1000] bg-[#2D2A26] text-[#F2EDE4] p-4 rounded-xl shadow-2xl shadow-black/20 flex flex-col gap-3 w-[300px] border border-[#7A756D]/30">
      <p className="m-0 text-sm font-medium leading-relaxed">
        New content available, click on reload button to update.
      </p>
      <div className="flex gap-3 mt-1">
        <button 
          onClick={() => updateServiceWorker(true)} 
          className="flex-1 bg-[#9C6644] hover:bg-[#855537] text-white border-none py-2 px-4 rounded-lg cursor-pointer font-bold text-sm transition-colors shadow-md"
        >
          Reload
        </button>
        <button 
          onClick={() => setNeedRefresh(false)} 
          className="flex-1 bg-transparent hover:bg-[#7A756D]/10 text-[#F2EDE4] border border-[#7A756D] py-2 px-4 rounded-lg cursor-pointer font-bold text-sm transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UpdatePrompt;