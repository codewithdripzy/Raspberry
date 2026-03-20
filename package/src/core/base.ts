export abstract class Widget {
  readonly key: any;
  constructor({ key }: { key?: any } = {}) {
    this.key = key;
  }
}

export abstract class StatelessWidget extends Widget {
  abstract build(context: BuildContext): Widget;
}

export abstract class StatefulWidget extends Widget {
  abstract createState(): State<StatefulWidget>;
}

export abstract class State<T extends StatefulWidget> {
  widget!: T;
  context!: BuildContext;

  abstract build(context: BuildContext): Widget;

  setState(fn: () => void): void {
    fn();
    // In a real framework, this should trigger a re-render of this specific element
    (this as any)._element?.markNeedsBuild();
  }

  initState(): void {}
  dispose(): void {}
}

export class BuildContext {
  // context info like theme, media query, etc. would go here
}