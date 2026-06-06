// Runtime override wiring is intentionally deferred.
// This file exists only to establish a future-safe client boundary.

export type ClientSectionKey = string;
export type ClientSectionRegistry = Record<ClientSectionKey, unknown>;

export const clientRegistry = {} satisfies ClientSectionRegistry;
