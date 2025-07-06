import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';

const RiveButton = () => {
  const STATE_MACHINE = 'State Machine 1';
  const TRIGGER_NAME = 'clickTrigger';

  const { rive, RiveComponent } = useRive({
    src: 'public/2.riv',
    stateMachines: STATE_MACHINE,
    autoplay: true,
    onStateChange: (event) => {
      // Listens for animation state changes
      console.log('State changed:', event);
    }
  });

  const clickTrigger = useStateMachineInput(rive, STATE_MACHINE, TRIGGER_NAME);

  // If you want to listen for custom Rive events, use the Rive instance directly
  useEffect(() => {
    if (rive) {
      const handleEvent = (e: any) => {
        console.log('Rive Event:', e.data?.name);
      };
      // Example: Listen for the 'play' event if needed
      // rive.on('play', handleEvent);
      // return () => {
      //   rive.off('play', handleEvent);
      // };
    }
  }, [rive]);

  return (
    <div className="w-full mx-auto mt-16 cursor-pointer  h-screen" onClick={() => clickTrigger?.fire()}>
  <RiveComponent />
</div>

  );
};

export default RiveButton;