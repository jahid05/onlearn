
// eslint-disable-next-line react/prop-types
const Button = ({btnAction}) => {
    return (
        <div>
            <button className="btn font-light bg-theme-1 border-none text-white px-8 py-4 text-[16px] rounded-xl">{btnAction}</button>
        </div>
    );
};

export default Button;