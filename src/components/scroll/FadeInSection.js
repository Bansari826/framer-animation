const FadeInSection = () => {
    const controls = useAnimation();
  
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight && top > 0) {
          controls.start({ opacity: 1 });
        } else {
          controls.start({ opacity: 0 });
        }
      });
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);
  
    return (
      <motion.div
        className="fade-in"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ padding: '20px', background: 'lightcoral', margin: '20px 0' }}
      >
        <h2>Fade In Effect</h2>
        <p>This element fades in as you scroll down.</p>
      </motion.div>
    );
  };
  