import omnistonWidgetLoader, {
  type OmnistonWidget,
} from "@ston-fi/omniston-widget-loader";
import {
  TonConnectButton,
  TonConnectUIProvider,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { useEffect, useRef } from "react";

function App() {
  const [tonconnect] = useTonConnectUI();

  const widgetElRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<OmnistonWidget | null>(null);

  useEffect(() => {
    omnistonWidgetLoader.load().then((OmnistonWidget) => {
      widgetRef.current = new OmnistonWidget({
        tonconnect: {
          type: "integrated",
          instance: tonconnect,
        },
        widget: {
          defaultBidAsset: "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c", // TON
          defaultAskAsset: "EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO", // STON
        },
      });

      widgetRef.current.mount(widgetElRef.current!);
    });

    return () => {
      widgetRef.current?.unmount();
    };
  }, [tonconnect, widgetElRef]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-8">
      <h1 className="text-center">
        Ston.fi Omniston Widget in React app with custom TonConnect
      </h1>
      <TonConnectButton className="mx-auto" />
      <div
        ref={widgetElRef}
        className="max-w-[min(500px,calc(100vw-2*2rem))] p-4"
      />
    </main>
  );
}

const Root = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  );
};

export default Root;
