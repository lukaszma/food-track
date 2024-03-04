import { defaultCache } from "@serwist/next/browser";
import type { PrecacheEntry } from "@serwist/precaching";
import { installSerwist } from "@serwist/sw";

declare const self: ServiceWorkerGlobalScope & {
  // Change this attribute's name to your `injectionPoint`.
  // `injectionPoint` is an InjectManifest option.
  // See https://serwist.pages.dev/docs/build/inject-manifest/configuring
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
};

installSerwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
});

self.addEventListener("push", (event) => {
  const data = event.data?.json();
  const title = data.title;
  const body = data.body;
  const icon = data.icon;
  const url = data.data.url;

  const notificationOptions = {
    body: body,
    tag: "unique-tag", // Use a unique tag to prevent duplicate notifications
    icon: icon,
    data: {
      url: url, // Replace with the desired URL for redirecting user to the desired page
    },
  };

  console.log("YOLO");

  self.registration.showNotification(title, notificationOptions);
});

// self.registration.pushManager.subscribe({
//   userVisibleOnly: true,
//   applicationServerKey:
//     "BJeFdPn35EBHJ_rR4x9vTL5NVPnLaYvJywIASm7bIxDDEMAN7Z31CSW3IvPixp7wiOdNGQIpwhq1xAse-vywO5c",
// });
