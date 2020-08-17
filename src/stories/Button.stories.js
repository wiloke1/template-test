import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Components/Button",
};

export const Primary = () => {
  return /* html */ `
    <button class="btn">
      Button Primary
    </button>
  `;
};

export const Secondary = () => {
  return /* html */ `
    <button class="btn btn--secondary">
      Button Secondary
    </button>
  `;
};
