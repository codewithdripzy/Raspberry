import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface ListViewProps {
  key?: any;
  children: Widget[];
  scrollDirection?: "vertical" | "horizontal";
  padding?: string;
  gap?: string;
}

class _ListView extends PrimitiveWidget {
  readonly props: ListViewProps;
  constructor(props: ListViewProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new ListViewElement(this);
  }
}
export const ListView = (props: ListViewProps) => new _ListView(props);

class ListViewElement extends PrimitiveElement {
  render(): HTMLElement {
    const props = (this._widget as _ListView).props;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = props.scrollDirection === "horizontal" ? "row" : "column";
    div.style.overflowX = props.scrollDirection === "horizontal" ? "auto" : "hidden";
    div.style.overflowY = props.scrollDirection === "horizontal" ? "hidden" : "auto";
    div.style.padding = props.padding || "0";
    div.style.gap = props.gap || "0";
    div.style.width = "100%";
    div.style.height = "100%";
    return div;
  }
  mountChildren(parent: HTMLElement): void {
     const props = (this._widget as _ListView).props;
     this._children = props.children.map(child => {
        const el = createElement(child);
        el.mount(parent);
        return el;
     });
  }
}
