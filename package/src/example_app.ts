import { 
  Scaffold, 
  Center, 
  Container, 
  Column, 
  Row, 
  Text, 
  StatefulWidget, 
  State,
  GestureDetector,
  runApp,
  Widget
} from "./widgets";

class PremiumDemoApp extends StatefulWidget {
  createState() {
    return new PremiumDemoAppState();
  }
}

class PremiumDemoAppState extends State<PremiumDemoApp> {
  count = 0;
  showStressTest = false;
  renderTime = 0;

  increment = () => {
    this.setState(() => {
      this.count++;
    });
  }

  toggleStressTest = () => {
    const start = performance.now();
    this.setState(() => {
      this.showStressTest = !this.showStressTest;
    });
    // Re-calculating after render is tricky without a post-frame callback,
    // so we'll just measure how long the build takes.
    this.renderTime = performance.now() - start;
  }

  build() {
    return Scaffold({
      backgroundColor: "#0F172A",
      body: Center({
        child: this.showStressTest ? this._buildStressTest() : this._buildDashboard()
      })
    });
  }

  _buildDashboard() {
    return Container({
      width: "450px",
      backgroundColor: "#1E293B",
      padding: "40px",
      borderRadius: "24px",
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      child: Column({
        mainAxisAlignment: "center",
        crossAxisAlignment: "center",
        gap: "32px",
        children: [
          // Header
          Column({
            gap: "12px",
            crossAxisAlignment: "center",
            children: [
              Container({
                width: "64px",
                height: "64px",
                backgroundColor: "#38BDF8",
                borderRadius: "16px",
                child: Center({
                  child: Text({ text: "R", fontSize: "32px", color: "white", fontWeight: "bold" })
                })
              }),
              Text({ text: "Raspberry Framework", fontSize: "24px", color: "white", fontWeight: "800" }),
              Text({ text: "Zero CSS, Full Performance", fontSize: "14px", color: "#94A3B8" }),
            ]
          }),

          // Stats Card
          Container({
            padding: "24px",
            backgroundColor: "#334155",
            borderRadius: "16px",
            width: "100%",
            child: Row({
              mainAxisAlignment: "space-between",
              crossAxisAlignment: "center",
              children: [
                Text({ text: "Interactions:", color: "#CBD5E1", fontSize: "16px" }),
                Text({ 
                  text: `${this.count}`, 
                  color: "#38BDF8", 
                  fontSize: "24px", 
                  fontWeight: "bold" 
                }),
              ]
            })
          }),

          // Buttons
          Column({
            gap: "12px",
            width: "100%",
            children: [
              GestureDetector({
                onTap: this.increment,
                child: Container({
                  backgroundColor: "#38BDF8",
                  padding: "16px",
                  borderRadius: "12px",
                  width: "100%",
                  child: Center({
                    child: Text({ text: "Increment Counter", color: "white", fontWeight: "600" })
                  })
                })
              }),
              GestureDetector({
                onTap: this.toggleStressTest,
                child: Container({
                  backgroundColor: "#475569",
                  padding: "16px",
                  borderRadius: "12px",
                  width: "100%",
                  child: Center({
                    child: Text({ text: "Run Stress Test (1,000 items)", color: "white", fontWeight: "600" })
                  })
                })
              })
            ]
          })
        ]
      })
    });
  }

  _buildStressTest() {
    const items = Array.from({ length: 1000 }).map((_, i) => 
      Container({
        padding: "8px",
        backgroundColor: i % 2 === 0 ? "#1E293B" : "#334155",
        borderRadius: "4px",
        child: Text({ text: `Performance Item #${i + 1}`, color: "white", fontSize: "12px" })
      })
    );

    return Container({
      width: "600px",
      height: "80vh",
      backgroundColor: "#1E293B",
      padding: "20px",
      borderRadius: "16px",
      child: Column({
        gap: "10px",
        children: [
          Row({
             mainAxisAlignment: "space-between",
             children: [
               Text({ text: "Stress Test: 1,000 Widgets", color: "white", fontWeight: "bold" }),
               GestureDetector({
                 onTap: this.toggleStressTest,
                 child: Text({ text: "Go Back", color: "#38BDF8" })
               })
             ]
          }),
          Text({ text: `Build time: ${this.renderTime.toFixed(2)}ms`, color: "#94A3B8", fontSize: "14px" }),
          Container({
            height: "1px",
            backgroundColor: "#334155",
            width: "100%"
          }),
          // List simulation (we don't have ListView yet, so we just wrap in a scrollable div)
          // In Raspberry, Container doesn't have overflow property yet. Let's add it.
          new ScrollableColumn({ children: items })
        ]
      })
    });
  }
}

// Quick hack for scrolling since we don't have ListView
class ScrollableColumn extends StatefulWidget {
  readonly children: Widget[];
  constructor({ children }: { children: Widget[] }) {
    super();
    this.children = children;
  }
  createState() { return new ScrollableColumnState(); }
}

class ScrollableColumnState extends State<ScrollableColumn> {
  build() {
    return Container({
      child: Column({
        gap: "4px",
        children: this.widget.children
      })
    });
  }
  initState() {
    setTimeout(() => {
      // @ts-ignore
      const dom = (this as any)._element?._children[0]?._dom;
      if (dom) {
        dom.parentElement.style.overflowY = "auto";
        dom.parentElement.style.height = "100%";
      }
    }, 0);
  }
}

if (typeof document !== "undefined") {
  const container = document.getElementById("app") || document.body;
  runApp(new PremiumDemoApp(), container);
}
