import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface TextProps {
  key?: any;
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  lineHeight?: string;
}

class _Text extends PrimitiveWidget {
  readonly props: TextProps;
  constructor(textOrProps: string | TextProps) {
    super({ key: typeof textOrProps === "string" ? undefined : textOrProps.key });
    if (typeof textOrProps === "string") {
      this.props = { text: textOrProps };
    } else {
      this.props = textOrProps;
    }
  }
  createElement(): PrimitiveElement {
    return new TextElement(this);
  }
}
export const Text = (textOrProps: string | TextProps) => new _Text(textOrProps);

class TextElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _Text).props;
    const span = document.createElement("span");
    span.innerText = props.text;
    span.style.color = props.color || "inherit";
    span.style.fontSize = props.fontSize || "inherit";
    span.style.fontWeight = props.fontWeight || "normal";
    span.style.textAlign = props.textAlign || "inherit";
    span.style.lineHeight = props.lineHeight || "1.2";
    span.style.display = "inline-block";
    return span;
  }
  mountChildren(parent: HTMLElement): void {}
}
