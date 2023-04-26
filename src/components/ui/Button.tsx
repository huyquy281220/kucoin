import { FC, ButtonHTMLAttributes } from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

const buttonVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
        size: {
            default: "",
            small: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, children, variant, size, ...props }) => {
    return (
        <button className={buttonVariants({ variant, size, className })} {...props}>
            {children}
        </button>
    );
};

export default Button;
