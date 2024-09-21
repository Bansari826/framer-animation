const SlideUpSection = () => {
    const controls = useAnimation();
  
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-up');
      elements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight && top > 0) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 50 });
        }
      });
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);
  
    return (
      <motion.div
        className="slide-up"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        style={{ padding: '20px', background: 'lightgreen', margin: '20px 0' }}
      >
        <h2>Slide Up Effect</h2>
        <p>This element slides up as you scroll down.</p>
      </motion.div>
    );
  };
  