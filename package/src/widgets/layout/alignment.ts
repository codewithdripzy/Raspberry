import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

class _Center extends PrimitiveWidget {
  readonly props: { child: Widget; key?: any };
  constructor({ child, key }: { child: Widget; key?: any }) {
    super({ key });
    this.props = { child, key };
  }
  createElement(): PrimitiveElement {
    return new CenterElement(this);
  }
}
export const Center = (props: { child: Widget; key?: any }) => new _Center(props);

class CenterElement extends PrimitiveElement {
  render(): HTMLElement {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.width = "100%";
    div.style.height = "100%";
    return div;
  }
  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _Center).props;
    const element = createElement(props.child);
    this._children = [element];
    element.mount(parent);
  }
}

// Align
export interface AlignProps {
  key?: any;
  alignment: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  child: Widget;
}

class _Align extends PrimitiveWidget {
  readonly props: AlignProps;
  constructor(props: AlignProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new AlignElement(this);
  }
}
export const Align = (props: AlignProps) => new _Align(props);

class AlignElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _Align).props;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.width = "100%";
    div.style.height = "100%";
    
    switch (props.alignment) {
      case "center":
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        break;
      case "top-left":
        div.style.justifyContent = "flex-start";
        div.style.alignItems = "flex-start";
        break;
      case "top-right":
        div.style.justifyContent = "flex-end";
        div.style.alignItems = "flex-start";
        break;
      case "bottom-left":
        div.style.justifyContent = "flex-start";
        div.style.alignItems = "flex-end";
        break;
      case "bottom-right":
        div.style.justifyContent = "flex-end";
        div.style.alignItems = "flex-end";
        break;
      case "top-center":
        div.style.justifyContent = "center";
        div.style.alignItems = "flex-start";
        break;
      case "bottom-center":
        div.style.justifyContent = "center";
        div.style.alignItems = "flex-end";
        break;
    }
    return div;
  }
  mountChildren(parent: HTMLElement): void {
     const props = (this._widget as _Align).props;
     const el = createElement(props.child);
     this._children = [el];
     el.mount(parent);
  }
}
