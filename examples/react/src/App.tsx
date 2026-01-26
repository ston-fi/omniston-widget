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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetRef = useRef<OmnistonWidget | null>(null);

  useEffect(() => {
    let isMounted = true;

    omnistonWidgetLoader.load().then((OmnistonWidgetConstructor) => {
      if (!isMounted || !containerRef.current || !tonconnect) return;

      widgetRef.current = new OmnistonWidgetConstructor({
        tonconnect: {
          type: "integrated",
          instance: tonconnect,
        },
        widget: {
          defaultBidAsset: "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c",  // TON
          defaultAskAsset: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",  // USD₮
          customAssets: [
            "EQA2kCVNwVsil2EM2mB0SkXytxCqQjS4mttjDpnXmwG9T6bO",                 // STON
          ],
        },
      });

      widgetRef.current.mount(containerRef.current);
    });

    return () => {
      isMounted = false;
      widgetRef.current?.unmount();
      widgetRef.current = null;
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-8">
      <h1 className="text-center">
        Ston.fi Omniston Widget in React app with custom TonConnect
      </h1>
      <TonConnectButton className="mx-auto" />
      <div
        ref={containerRef}
        className="p-4"
      />
    </main>
  );
}

const Root = () => {
  return (
    <TonConnectUIProvider 
      // see https://docs.ton.org/ecosystem/ton-connect/manifest
      manifestUrl="https://[myapp.com]/tonconnect-manifest.json"
    >
      <App />
    </TonConnectUIProvider>
  );
};

export default Root;
