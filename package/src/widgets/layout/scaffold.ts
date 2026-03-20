import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

class _Scaffold extends PrimitiveWidget {
  readonly props: { body: Widget; backgroundColor?: string; key?: any };
  constructor({ body, backgroundColor, key }: { body: Widget; backgroundColor?: string; key?: any }) {
    super({ key });
    this.props = { body, backgroundColor, key };
  }
  createElement(): PrimitiveElement {
    return new ScaffoldElement(this);
  }
}
export const Scaffold = (props: { body: Widget; backgroundColor?: string; key?: any }) => new _Scaffold(props);

class ScaffoldElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _Scaffold).props;
    const div = document.createElement("div");
    div.id = "raspberry-scaffold";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.backgroundColor = props.backgroundColor || "#ffffff";
    div.style.margin = "0";
    div.style.padding = "0";
    div.style.overflow = "hidden";
    div.style.fontFamily = "'Inter', system-ui, -apple-system, sans-serif";
    
    // Explicitly reset on mount
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    
    return div;
  }

  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _Scaffold).props;
    const element = createElement(props.body);
    this._children = [element];
    element.mount(parent);
  }
}
