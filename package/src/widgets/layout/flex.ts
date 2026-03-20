import { Widget } from "../../core/base";
import { createElement } from "../../core/engine";
import { PrimitiveWidget, PrimitiveElement } from "../../core/base_primitive";

export interface FlexProps {
  key?: any;
  children: Widget[];
  mainAxisAlignment?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  crossAxisAlignment?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  gap?: string;
  width?: string;
  height?: string;
}


class _Column extends PrimitiveWidget {
  readonly props: FlexProps;
  constructor(props: FlexProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new FlexElement(this, "column");
  }
}
export const Column = (props: FlexProps) => new _Column(props);

class _Row extends PrimitiveWidget {
  readonly props: FlexProps;
  constructor(props: FlexProps) {
    super({ key: props.key });
    this.props = props;
  }
  createElement(): PrimitiveElement {
    return new FlexElement(this, "row");
  }
}
export const Row = (props: FlexProps) => new _Row(props);

class FlexElement extends PrimitiveElement {
  constructor(widget: Widget, private direction: "column" | "row") {
    super(widget);
  }
  render(): HTMLElement {
    const props = (this._widget as _Column).props;
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = this.direction;
    div.style.justifyContent = props.mainAxisAlignment || "flex-start";
    div.style.alignItems = props.crossAxisAlignment || "stretch";
    div.style.gap = props.gap || "0";
    div.style.width = props.width || "auto";
    div.style.height = props.height || "auto";
    return div;
  }

  mountChildren(parent: HTMLElement): void {
    const props = (this._widget as _Column).props;
    this._children = props.children.map((childWidget) => {
      const element = createElement(childWidget);
      element.mount(parent);
      return element;
    });
  }
}
