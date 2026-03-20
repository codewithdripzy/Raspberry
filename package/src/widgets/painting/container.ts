import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface ContainerProps {
  key?: any;
  width?: string;
  height?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  border?: string;
  boxShadow?: string;
  child?: Widget;
}

class _Container extends PrimitiveWidget {
  readonly props: ContainerProps;
  constructor(props: ContainerProps = {}) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new ContainerElement(this);
  }
}
export const Container = (props: ContainerProps = {}) => new _Container(props);

class ContainerElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _Container).props;
    const div = document.createElement("div");
    div.style.width = props.width || "auto";
    div.style.height = props.height || "auto";
    div.style.backgroundColor = props.backgroundColor || "transparent";
    div.style.padding = props.padding || "0";
    div.style.borderRadius = props.borderRadius || "0";
    div.style.border = props.border || "none";
    div.style.boxShadow = props.boxShadow || "none";
    div.style.boxSizing = "border-box";
    return div;
  }
  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _Container).props;
    if (props.child) {
      const element = createElement(props.child);
      this._children = [element];
      element.mount(parent);
    }
  }
}
