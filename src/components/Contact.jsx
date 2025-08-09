import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="w-screen">
      <div
        className="relative min-h-dvh w-screen text-blue-50"
        style={{
          backgroundImage: "url('/img/contact-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 15%",
        }}
      >
        <div className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center text-center px-6">


          <AnimatedTitle
            title="let&#39;s team up. <br /> join the community."
            className="w-full px-4 sm:px-8 !leading-[0.85] !text-[12vw] md:!text-[9vw]"
          />

          <Button title="join the community" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
