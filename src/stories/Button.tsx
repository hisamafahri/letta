export type TButton = {
  label?: string;
};
export const Button = ({ label = "Button" }: TButton) => {
  return <button>{label}</button>;
};
