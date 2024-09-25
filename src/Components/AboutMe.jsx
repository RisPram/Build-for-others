import { personPhoto } from "../Assets";
import Container from "../Common/Container";
import { socialMedia } from "../Common/RealData";
import ScrollToTopOfPage from "../Common/ScrollToTopOfPage";

const AboutMe = ({ whiteMode }) => {
  return (
    <>
      <ScrollToTopOfPage />
      <Container whiteMode={whiteMode} inner="my-20">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-14 w-full">
          <figure className="w-full  h-[400px] xl:h-full rounded-lg flex items-start justify-start">
            <img
              src={personPhoto}
              alt="person"
              className="object-contain w-full h-full"
            />
          </figure>
          <section className="flex flex-col items-start">
            <h2
              className={`py-3 !text-3xl lg:!text-5xl font-bold ${
                whiteMode ? "text-[#101010]" : "text-[#fff]"
              }`}
            >
              Hey, I'm Jay.
            </h2>
            <p
              className={`py-3 text-xl lg:text-2xl   ${
                whiteMode ? "text-[#525155]" : "text-[#C1C1C1]"
              } whitespace-pre-line`}
            >
              {`
A passionate individual with a love for your profession or passion, e.g., design, writing, technology]. With over [X years] of experience, I've dedicated my career to creating impactful and meaningful work that resonates with people.\n\nI believe in the power of creativity, curiosity, and continuous learning. My journey has taken me through various roles, from [mention any relevant roles or experiences], and each experience has shaped me into the person I am today. I thrive in environments where I can challenge myself, think outside the box, and collaborate with like-minded people who share a passion for excellence.\n\n When I'm not working, you can find me [mention hobbies or interests, e.g., exploring new places, reading a good book, or trying my hand at cooking]. I believe in living life to the fullest and finding inspiration in everyday moments.\n\n Thank you for taking the time to get to know me a little better. I'm always excited to connect with others, share ideas, and learn from new experiences. Let's create something amazing together!
`}
            </p>
            <p
              className={`py-5 ${whiteMode ? "text-[#525155]" : "text-[#fff]"}`}
            >
              Signature
            </p>
            <div className="py-3 flex items-start">
              {socialMedia?.map((d, i) => {
                return (
                  // <figure
                  //   key={i}
                  //   className="p-2 bg-[#5F5F5F] hover:bg-babyGreen cursor-pointer rounded-xl mr-2 flex items-center justify-center"
                  // >
                  //   <img src={d?.icon} alt="smedia" className="mr-2  w-8 h-8" />
                  // </figure>
                  <p
                    key={i}
                    className={` ${
                      whiteMode ? "text-[#525155]" : "text-[#C1C1C1]"
                    } text-xl mr-3 cursor-pointer flex-wrap my-2`}
                  >
                    {d?.name}
                  </p>
                );
              })}
            </div>
          </section>
        </section>
      </Container>
    </>
  );
};

export default AboutMe;
