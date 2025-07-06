import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const RiveButton2 = () => {
  const STATE_MACHINE = 'State Machine 1';
  const TRIGGER_NAME = 'clickTrigger';

  const { rive, RiveComponent } = useRive({
    src: 'https://res.cloudinary.com/dh626d9by/raw/upload/v1751784434/bentoFinal_tb4nue.riv',
    stateMachines: STATE_MACHINE,
    autoplay: true,
    onStateChange: (event) => {
      // Listens for animation state changes
      console.log('State changed:', event);
    }
  });

  const clickTrigger = useStateMachineInput(rive, STATE_MACHINE, TRIGGER_NAME);

  // If you want to listen for custom Rive events, use the Rive instance directly
  //   useEffect(() => {
  //     if (rive) {
  //       const handleEvent = (e: any) => {
  //         console.log('Rive Event:', e.data?.name);
  //       };
  //       // Example: Listen for the 'play' event if needed
  //       // rive.on('play', handleEvent);
  //       // return () => {
  //       //   rive.off('play', handleEvent);
  //       // };
  //     }
  //   }, [rive]);

  return (
    <div>
      <div className='text-7xl text-white font-semibold text-center mt-40'>
        <span>Master the skills</span> <br />
        <span> that matter.</span>
      </div>
      <div className='text-[#a3a5ae] text-2xl font-semibold text-center mt-4 w-[600px] mx-auto'>
        Tough problems, real guidance, and support when you need it—so you can focus on getting better.
      </div>

      <div className="w-full mx-auto mt-3 cursor-pointer  h-screen" onClick={() => clickTrigger?.fire()}>
        <RiveComponent />
      </div>
    </div>

  );
};

export default RiveButton2;