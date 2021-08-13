import { build, files, timestamp } from "$service-worker";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import type { PrecacheEntry } from "workbox-precaching/_types";

const worker = self as unknown as ServiceWorkerGlobalScope;

worker.skipWaiting();
clientsClaim();

const built: PrecacheEntry[] = build.map((url) => ({ url, revision: null }));
const statics: PrecacheEntry[] = files.map((url) => ({ url, revision: `${timestamp}` }));

precacheAndRoute(statics.concat(built));
cleanupOutdatedCaches();
