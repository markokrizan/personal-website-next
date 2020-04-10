import Typewriter from 'typewriter-effect';

const TypewriterText = ({ text, delay }) => {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString(text)
                .pauseFor(delay)
                .start();
            }}
        />
    );
}

export default TypewriterText;