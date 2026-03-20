import { Widget, StatelessWidget, StatefulWidget, State, BuildContext } from "./base";

export abstract class Element {
  protected _widget: Widget;
  protected _dom: HTMLElement | null = null;
  protected _children: Element[] = [];

  constructor(widget: Widget) {
    this._widget = widget;
  }

  abstract mount(parent: HTMLElement): void;
  abstract update(newWidget: Widget): void;

  markNeedsBuild(): void {
    const parent = this._dom?.parentElement;
    if (parent) {
      // Very simple re-render by re-mounting (naive, but works for an MVP)
      this.rebuild();
    }
  }

  protected abstract rebuild(): void;
}

export class StatelessElement extends Element {
  constructor(widget: StatelessWidget) {
    super(widget);
  }

  mount(parent: HTMLElement): void {
    const buildContext = new BuildContext();
    const builtWidget = (this._widget as StatelessWidget).build(buildContext);
    const element = createElement(builtWidget);
    this._children = [element];
    element.mount(parent);
  }

  update(newWidget: Widget): void {
    this._widget = newWidget;
    this.rebuild();
  }

  protected rebuild(): void {
    if (!this._children[0]) return;
    const oldChild = this._children[0];
    const buildContext = new BuildContext();
    const builtWidget = (this._widget as StatelessWidget).build(buildContext);
    
    // Simplest possible child replacement
    // @ts-ignore
    const parentDom = oldChild._dom?.parentElement;
    if (parentDom) {
      const newChild = createElement(builtWidget);
      newChild.mount(parentDom);
      // @ts-ignore
      parentDom.removeChild(oldChild._dom);
      this._children = [newChild];
    }
  }
}

export class StatefulElement extends Element {
  private _state: State<StatefulWidget>;

  constructor(widget: StatefulWidget) {
    super(widget);
    this._state = widget.createState();
    this._state.widget = widget;
    (this._state as any)._element = this;
    this._state.initState();
  }

  mount(parent: HTMLElement): void {
    const buildContext = new BuildContext();
    this._state.context = buildContext;
    const builtWidget = this._state.build(buildContext);
    const element = createElement(builtWidget);
    this._children = [element];
    element.mount(parent);
  }

  update(newWidget: Widget): void {
    this._widget = newWidget;
    this._state.widget = newWidget as StatefulWidget;
    this.rebuild();
  }

  protected rebuild(): void {
    if (!this._children[0]) return;
    const oldChild = this._children[0];
    const builtWidget = this._state.build(this._state.context);
    
    // @ts-ignore
    const parentDom = oldChild._dom?.parentElement;
    if (parentDom) {
      const newChild = createElement(builtWidget);
      newChild.mount(parentDom);
      // @ts-ignore
      parentDom.removeChild(oldChild._dom);
      this._children = [newChild];
    }
  }
}


// Internal helper to create the correct Element type
export function createElement(widget: Widget): Element {
  if (widget instanceof StatelessWidget) {
    return new StatelessElement(widget);
  } else if (widget instanceof StatefulWidget) {
    return new StatefulElement(widget);
  }
  // This will handle our primitive/built-in widgets later
  // @ts-ignore
  if (widget.createElement) {
    // @ts-ignore
    return widget.createElement();
  }
  throw new Error("Unknown widget type");
}

export function runApp(widget: Widget, container: HTMLElement): void {
  const element = createElement(widget);
  element.mount(container);
}
