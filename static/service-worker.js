(() => {
  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_version.js
  try {
    self["workbox:core:5.1.4"] && _();
  } catch (e) {
  }

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/models/messages/messages.js
  var messages = {
    "invalid-value": ({ paramName, validValueDescription, value }) => {
      if (!paramName || !validValueDescription) {
        throw new Error(`Unexpected input to 'invalid-value' error.`);
      }
      return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
    },
    "not-an-array": ({ moduleName, className, funcName, paramName }) => {
      if (!moduleName || !className || !funcName || !paramName) {
        throw new Error(`Unexpected input to 'not-an-array' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    "incorrect-type": ({ expectedType, paramName, moduleName, className, funcName }) => {
      if (!expectedType || !paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-type' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className ? className + "." : ""}${funcName}()' must be of type ${expectedType}.`;
    },
    "incorrect-class": ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
      if (!expectedClass || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-class' error.`);
      }
      if (isReturnValueProblem) {
        return `The return value from '${moduleName}.${className ? className + "." : ""}${funcName}()' must be an instance of class ${expectedClass.name}.`;
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className ? className + "." : ""}${funcName}()' must be an instance of class ${expectedClass.name}.`;
    },
    "missing-a-method": ({ expectedMethod, paramName, moduleName, className, funcName }) => {
      if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
        throw new Error(`Unexpected input to 'missing-a-method' error.`);
      }
      return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    "add-to-cache-list-unexpected-type": ({ entry }) => {
      return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
    },
    "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
      if (!firstEntry || !secondEntry) {
        throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
      }
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
    },
    "plugin-error-request-will-fetch": ({ thrownError }) => {
      if (!thrownError) {
        throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
      }
      return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownError.message}'.`;
    },
    "invalid-cache-name": ({ cacheNameId, value }) => {
      if (!cacheNameId) {
        throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
      }
      return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
    },
    "unregister-route-but-not-found-with-method": ({ method }) => {
      if (!method) {
        throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
      }
      return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
    },
    "unregister-route-route-not-registered": () => {
      return `The route you're trying to unregister was not previously registered.`;
    },
    "queue-replay-failed": ({ name }) => {
      return `Replaying the background sync queue '${name}' failed.`;
    },
    "duplicate-queue-name": ({ name }) => {
      return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
    },
    "expired-test-without-max-age": ({ methodName, paramName }) => {
      return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
    },
    "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
    },
    "not-array-of-class": ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
    },
    "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
    },
    "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
    },
    "invalid-string": ({ moduleName, funcName, paramName }) => {
      if (!paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'invalid-string' error.`);
      }
      return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
    },
    "channel-name-required": () => {
      return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
    },
    "invalid-responses-are-same-args": () => {
      return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
    },
    "expire-custom-caches-only": () => {
      return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
    },
    "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
      }
      return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "single-range-only": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'single-range-only' error.`);
      }
      return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "invalid-range-values": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'invalid-range-values' error.`);
      }
      return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "no-range-header": () => {
      return `No Range header was found in the Request provided.`;
    },
    "range-not-satisfiable": ({ size, start, end }) => {
      return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
    },
    "attempt-to-cache-non-get-request": ({ url, method }) => {
      return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
    },
    "cache-put-with-no-response": ({ url }) => {
      return `There was an attempt to cache '${url}' but the response was not defined.`;
    },
    "no-response": ({ url, error }) => {
      let message = `The strategy could not generate a response for '${url}'.`;
      if (error) {
        message += ` The underlying error is ${error}.`;
      }
      return message;
    },
    "bad-precaching-response": ({ url, status }) => {
      return `The precaching request for '${url}' failed with an HTTP status of ${status}.`;
    },
    "non-precached-url": ({ url }) => {
      return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
    },
    "add-to-cache-list-conflicting-integrities": ({ url }) => {
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
    },
    "missing-precache-entry": ({ cacheName, url }) => {
      return `Unable to find a precached response in ${cacheName} for ${url}.`;
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/models/messages/messageGenerator.js
  var generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
      throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
  };
  var messageGenerator = false ? fallback : generatorFunction;

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError = class extends Error {
    constructor(errorCode, details) {
      const message = messageGenerator(errorCode, details);
      super(message);
      this.name = errorCode;
      this.details = details;
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/assert.js
  var isArray = (value, details) => {
    if (!Array.isArray(value)) {
      throw new WorkboxError("not-an-array", details);
    }
  };
  var hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== "function") {
      details["expectedMethod"] = expectedMethod;
      throw new WorkboxError("missing-a-method", details);
    }
  };
  var isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
      details["expectedType"] = expectedType;
      throw new WorkboxError("incorrect-type", details);
    }
  };
  var isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
      details["expectedClass"] = expectedClass;
      throw new WorkboxError("incorrect-class", details);
    }
  };
  var isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
      details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
      throw new WorkboxError("invalid-value", details);
    }
  };
  var isArrayOfClass = (value, expectedClass, details) => {
    const error = new WorkboxError("not-array-of-class", details);
    if (!Array.isArray(value)) {
      throw error;
    }
    for (const item of value) {
      if (!(item instanceof expectedClass)) {
        throw error;
      }
    }
  };
  var finalAssertExports = false ? null : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/logger.js
  var logger = false ? null : (() => {
    if (!("__WB_DISABLE_DEV_LOGS" in self)) {
      self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
      debug: `#7f8c8d`,
      log: `#2ecc71`,
      warn: `#f39c12`,
      error: `#c0392b`,
      groupCollapsed: `#3498db`,
      groupEnd: null
    };
    const print = function(method, args) {
      if (self.__WB_DISABLE_DEV_LOGS) {
        return;
      }
      if (method === "groupCollapsed") {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          console[method](...args);
          return;
        }
      }
      const styles = [
        `background: ${methodToColorMap[method]}`,
        `border-radius: 0.5em`,
        `color: white`,
        `font-weight: bold`,
        `padding: 2px 0.5em`
      ];
      const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
      console[method](...logPrefix, ...args);
      if (method === "groupCollapsed") {
        inGroup = true;
      }
      if (method === "groupEnd") {
        inGroup = false;
      }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
      const method = key;
      api[method] = (...args) => {
        print(method, args);
      };
    }
    return api;
  })();

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/_version.js
  try {
    self["workbox:routing:5.1.4"] && _();
  } catch (e) {
  }

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/utils/constants.js
  var defaultMethod = "GET";
  var validMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT"
  ];

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler = (handler) => {
    if (handler && typeof handler === "object") {
      if (true) {
        finalAssertExports.hasMethod(handler, "handle", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return handler;
    } else {
      if (true) {
        finalAssertExports.isType(handler, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return { handle: handler };
    }
  };

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/Route.js
  var Route = class {
    constructor(match, handler, method = defaultMethod) {
      if (true) {
        finalAssertExports.isType(match, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "match"
        });
        if (method) {
          finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
        }
      }
      this.handler = normalizeHandler(handler);
      this.match = match;
      this.method = method;
    }
  };

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute = class extends Route {
    constructor(regExp, handler, method) {
      if (true) {
        finalAssertExports.isInstance(regExp, RegExp, {
          moduleName: "workbox-routing",
          className: "RegExpRoute",
          funcName: "constructor",
          paramName: "pattern"
        });
      }
      const match = ({ url }) => {
        const result = regExp.exec(url.href);
        if (!result) {
          return;
        }
        if (url.origin !== location.origin && result.index !== 0) {
          if (true) {
            logger.debug(`The regular expression '${regExp}' only partially matched against the cross-origin URL '${url}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          }
          return;
        }
        return result.slice(1);
      };
      super(match, handler, method);
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
  };

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/Router.js
  var Router = class {
    constructor() {
      this._routes = /* @__PURE__ */ new Map();
    }
    get routes() {
      return this._routes;
    }
    addFetchListener() {
      self.addEventListener("fetch", (event) => {
        const { request } = event;
        const responsePromise = this.handleRequest({ request, event });
        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    addCacheListener() {
      self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "CACHE_URLS") {
          const { payload } = event.data;
          if (true) {
            logger.debug(`Caching URLs from the window`, payload.urlsToCache);
          }
          const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
            if (typeof entry === "string") {
              entry = [entry];
            }
            const request = new Request(...entry);
            return this.handleRequest({ request });
          }));
          event.waitUntil(requestPromises);
          if (event.ports && event.ports[0]) {
            requestPromises.then(() => event.ports[0].postMessage(true));
          }
        }
      });
    }
    handleRequest({ request, event }) {
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "handleRequest",
          paramName: "options.request"
        });
      }
      const url = new URL(request.url, location.href);
      if (!url.protocol.startsWith("http")) {
        if (true) {
          logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
        }
        return;
      }
      const { params, route } = this.findMatchingRoute({ url, request, event });
      let handler = route && route.handler;
      const debugMessages = [];
      if (true) {
        if (handler) {
          debugMessages.push([
            `Found a route to handle this request:`,
            route
          ]);
          if (params) {
            debugMessages.push([
              `Passing the following params to the route's handler:`,
              params
            ]);
          }
        }
      }
      if (!handler && this._defaultHandler) {
        if (true) {
          debugMessages.push(`Failed to find a matching route. Falling back to the default handler.`);
        }
        handler = this._defaultHandler;
      }
      if (!handler) {
        if (true) {
          logger.debug(`No route found for: ${getFriendlyURL(url)}`);
        }
        return;
      }
      if (true) {
        logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
        debugMessages.forEach((msg) => {
          if (Array.isArray(msg)) {
            logger.log(...msg);
          } else {
            logger.log(msg);
          }
        });
        logger.groupEnd();
      }
      let responsePromise;
      try {
        responsePromise = handler.handle({ url, request, event, params });
      } catch (err) {
        responsePromise = Promise.reject(err);
      }
      if (responsePromise instanceof Promise && this._catchHandler) {
        responsePromise = responsePromise.catch((err) => {
          if (true) {
            logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to Catch Handler.`);
            logger.error(`Error thrown by:`, route);
            logger.error(err);
            logger.groupEnd();
          }
          return this._catchHandler.handle({ url, request, event });
        });
      }
      return responsePromise;
    }
    findMatchingRoute({ url, request, event }) {
      if (true) {
        finalAssertExports.isInstance(url, URL, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "findMatchingRoute",
          paramName: "options.url"
        });
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "findMatchingRoute",
          paramName: "options.request"
        });
      }
      const routes = this._routes.get(request.method) || [];
      for (const route of routes) {
        let params;
        const matchResult = route.match({ url, request, event });
        if (matchResult) {
          params = matchResult;
          if (Array.isArray(matchResult) && matchResult.length === 0) {
            params = void 0;
          } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
            params = void 0;
          } else if (typeof matchResult === "boolean") {
            params = void 0;
          }
          return { route, params };
        }
      }
      return {};
    }
    setDefaultHandler(handler) {
      this._defaultHandler = normalizeHandler(handler);
    }
    setCatchHandler(handler) {
      this._catchHandler = normalizeHandler(handler);
    }
    registerRoute(route) {
      if (true) {
        finalAssertExports.isType(route, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route, "match", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.isType(route.handler, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route.handler, "handle", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.handler"
        });
        finalAssertExports.isType(route.method, "string", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.method"
        });
      }
      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      }
      this._routes.get(route.method).push(route);
    }
    unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new WorkboxError("unregister-route-but-not-found-with-method", {
          method: route.method
        });
      }
      const routeIndex = this._routes.get(route.method).indexOf(route);
      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new WorkboxError("unregister-route-route-not-registered");
      }
    }
  };

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter;
  var getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
      defaultRouter = new Router();
      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }
    return defaultRouter;
  };

  // node_modules/.pnpm/workbox-routing@5.1.4/node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({ url }) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration !== "undefined" ? registration.scope : ""
  };
  var _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
  };
  var eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
      fn(key);
    }
  };
  var cacheNames = {
    updateDetails: (details) => {
      eachCacheNameDetail((key) => {
        if (typeof details[key] === "string") {
          _cacheNameDetails[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
      return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
      return _cacheNameDetails.suffix;
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks = /* @__PURE__ */ new Set();

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/utils/pluginUtils.js
  var pluginUtils = {
    filter: (plugins, callbackName) => {
      return plugins.filter((plugin) => callbackName in plugin);
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/cacheWrapper.js
  var _getEffectiveRequest = async ({ request, mode, plugins = [] }) => {
    const cacheKeyWillBeUsedPlugins = pluginUtils.filter(plugins, "cacheKeyWillBeUsed");
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
      effectiveRequest = await plugin["cacheKeyWillBeUsed"].call(plugin, { mode, request: effectiveRequest });
      if (typeof effectiveRequest === "string") {
        effectiveRequest = new Request(effectiveRequest);
      }
      if (true) {
        finalAssertExports.isInstance(effectiveRequest, Request, {
          moduleName: "Plugin",
          funcName: "cacheKeyWillBeUsed",
          isReturnValueProblem: true
        });
      }
    }
    return effectiveRequest;
  };
  var _isResponseSafeToCache = async ({ request, response, event, plugins = [] }) => {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const plugin of plugins) {
      if ("cacheWillUpdate" in plugin) {
        pluginsUsed = true;
        const pluginMethod = plugin["cacheWillUpdate"];
        responseToCache = await pluginMethod.call(plugin, {
          request,
          response: responseToCache,
          event
        });
        if (true) {
          if (responseToCache) {
            finalAssertExports.isInstance(responseToCache, Response, {
              moduleName: "Plugin",
              funcName: "cacheWillUpdate",
              isReturnValueProblem: true
            });
          }
        }
        if (!responseToCache) {
          break;
        }
      }
    }
    if (!pluginsUsed) {
      if (true) {
        if (responseToCache) {
          if (responseToCache.status !== 200) {
            if (responseToCache.status === 0) {
              logger.warn(`The response for '${request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
            } else {
              logger.debug(`The response for '${request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
            }
          }
        }
      }
      responseToCache = responseToCache && responseToCache.status === 200 ? responseToCache : void 0;
    }
    return responseToCache ? responseToCache : null;
  };
  var matchWrapper = async ({ cacheName, request, event, matchOptions, plugins = [] }) => {
    const cache = await self.caches.open(cacheName);
    const effectiveRequest = await _getEffectiveRequest({
      plugins,
      request,
      mode: "read"
    });
    let cachedResponse = await cache.match(effectiveRequest, matchOptions);
    if (true) {
      if (cachedResponse) {
        logger.debug(`Found a cached response in '${cacheName}'.`);
      } else {
        logger.debug(`No cached response found in '${cacheName}'.`);
      }
    }
    for (const plugin of plugins) {
      if ("cachedResponseWillBeUsed" in plugin) {
        const pluginMethod = plugin["cachedResponseWillBeUsed"];
        cachedResponse = await pluginMethod.call(plugin, {
          cacheName,
          event,
          matchOptions,
          cachedResponse,
          request: effectiveRequest
        });
        if (true) {
          if (cachedResponse) {
            finalAssertExports.isInstance(cachedResponse, Response, {
              moduleName: "Plugin",
              funcName: "cachedResponseWillBeUsed",
              isReturnValueProblem: true
            });
          }
        }
      }
    }
    return cachedResponse;
  };
  var putWrapper = async ({ cacheName, request, response, event, plugins = [], matchOptions }) => {
    if (true) {
      if (request.method && request.method !== "GET") {
        throw new WorkboxError("attempt-to-cache-non-get-request", {
          url: getFriendlyURL(request.url),
          method: request.method
        });
      }
    }
    const effectiveRequest = await _getEffectiveRequest({
      plugins,
      request,
      mode: "write"
    });
    if (!response) {
      if (true) {
        logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
      }
      throw new WorkboxError("cache-put-with-no-response", {
        url: getFriendlyURL(effectiveRequest.url)
      });
    }
    const responseToCache = await _isResponseSafeToCache({
      event,
      plugins,
      response,
      request: effectiveRequest
    });
    if (!responseToCache) {
      if (true) {
        logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
      }
      return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = pluginUtils.filter(plugins, "cacheDidUpdate");
    const oldResponse = updatePlugins.length > 0 ? await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) : null;
    if (true) {
      logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
    }
    try {
      await cache.put(effectiveRequest, responseToCache);
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        await executeQuotaErrorCallbacks();
      }
      throw error;
    }
    for (const plugin of updatePlugins) {
      await plugin["cacheDidUpdate"].call(plugin, {
        cacheName,
        event,
        oldResponse,
        newResponse: responseToCache,
        request: effectiveRequest
      });
    }
  };
  var cacheWrapper = {
    put: putWrapper,
    match: matchWrapper
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/fetchWrapper.js
  var wrappedFetch = async ({ request, fetchOptions, event, plugins = [] }) => {
    if (typeof request === "string") {
      request = new Request(request);
    }
    if (event instanceof FetchEvent && event.preloadResponse) {
      const possiblePreloadResponse = await event.preloadResponse;
      if (possiblePreloadResponse) {
        if (true) {
          logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
        }
        return possiblePreloadResponse;
      }
    }
    if (true) {
      finalAssertExports.isInstance(request, Request, {
        paramName: "request",
        expectedClass: Request,
        moduleName: "workbox-core",
        className: "fetchWrapper",
        funcName: "wrappedFetch"
      });
    }
    const failedFetchPlugins = pluginUtils.filter(plugins, "fetchDidFail");
    const originalRequest = failedFetchPlugins.length > 0 ? request.clone() : null;
    try {
      for (const plugin of plugins) {
        if ("requestWillFetch" in plugin) {
          const pluginMethod = plugin["requestWillFetch"];
          const requestClone = request.clone();
          request = await pluginMethod.call(plugin, {
            request: requestClone,
            event
          });
          if (true) {
            if (request) {
              finalAssertExports.isInstance(request, Request, {
                moduleName: "Plugin",
                funcName: "cachedResponseWillBeUsed",
                isReturnValueProblem: true
              });
            }
          }
        }
      }
    } catch (err) {
      throw new WorkboxError("plugin-error-request-will-fetch", {
        thrownError: err
      });
    }
    const pluginFilteredRequest = request.clone();
    try {
      let fetchResponse;
      if (request.mode === "navigate") {
        fetchResponse = await fetch(request);
      } else {
        fetchResponse = await fetch(request, fetchOptions);
      }
      if (true) {
        logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
      }
      for (const plugin of plugins) {
        if ("fetchDidSucceed" in plugin) {
          fetchResponse = await plugin["fetchDidSucceed"].call(plugin, {
            event,
            request: pluginFilteredRequest,
            response: fetchResponse
          });
          if (true) {
            if (fetchResponse) {
              finalAssertExports.isInstance(fetchResponse, Response, {
                moduleName: "Plugin",
                funcName: "fetchDidSucceed",
                isReturnValueProblem: true
              });
            }
          }
        }
      }
      return fetchResponse;
    } catch (error) {
      if (true) {
        logger.error(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
      }
      for (const plugin of failedFetchPlugins) {
        await plugin["fetchDidFail"].call(plugin, {
          error,
          event,
          originalRequest: originalRequest.clone(),
          request: pluginFilteredRequest.clone()
        });
      }
      throw error;
    }
  };
  var fetchWrapper = {
    fetch: wrappedFetch
  };

  // node_modules/.pnpm/workbox-strategies@5.1.4/node_modules/workbox-strategies/_version.js
  try {
    self["workbox:strategies:5.1.4"] && _();
  } catch (e) {
  }

  // node_modules/.pnpm/workbox-strategies@5.1.4/node_modules/workbox-strategies/utils/messages.js
  var messages2 = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
    printFinalResponse: (response) => {
      if (response) {
        logger.groupCollapsed(`View the final response here.`);
        logger.log(response || "[No response returned]");
        logger.groupEnd();
      }
    }
  };

  // node_modules/.pnpm/workbox-strategies@5.1.4/node_modules/workbox-strategies/CacheFirst.js
  var CacheFirst = class {
    constructor(options = {}) {
      this._cacheName = cacheNames.getRuntimeName(options.cacheName);
      this._plugins = options.plugins || [];
      this._fetchOptions = options.fetchOptions;
      this._matchOptions = options.matchOptions;
    }
    async handle({ event, request }) {
      const logs = [];
      if (typeof request === "string") {
        request = new Request(request);
      }
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: "CacheFirst",
          funcName: "makeRequest",
          paramName: "request"
        });
      }
      let response = await cacheWrapper.match({
        cacheName: this._cacheName,
        request,
        event,
        matchOptions: this._matchOptions,
        plugins: this._plugins
      });
      let error;
      if (!response) {
        if (true) {
          logs.push(`No response found in the '${this._cacheName}' cache. Will respond with a network request.`);
        }
        try {
          response = await this._getFromNetwork(request, event);
        } catch (err) {
          error = err;
        }
        if (true) {
          if (response) {
            logs.push(`Got response from network.`);
          } else {
            logs.push(`Unable to get a response from the network.`);
          }
        }
      } else {
        if (true) {
          logs.push(`Found a cached response in the '${this._cacheName}' cache.`);
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart("CacheFirst", request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
    async _getFromNetwork(request, event) {
      const response = await fetchWrapper.fetch({
        request,
        event,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins
      });
      const responseClone = response.clone();
      const cachePutPromise = cacheWrapper.put({
        cacheName: this._cacheName,
        request,
        response: responseClone,
        event,
        plugins: this._plugins
      });
      if (event) {
        try {
          event.waitUntil(cachePutPromise);
        } catch (error) {
          if (true) {
            logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
          }
        }
      }
      return response;
    }
  };

  // node_modules/.pnpm/workbox-strategies@5.1.4/node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin = {
    cacheWillUpdate: async ({ response }) => {
      if (response.status === 200 || response.status === 0) {
        return response;
      }
      return null;
    }
  };

  // node_modules/.pnpm/workbox-strategies@5.1.4/node_modules/workbox-strategies/NetworkFirst.js
  var NetworkFirst = class {
    constructor(options = {}) {
      this._cacheName = cacheNames.getRuntimeName(options.cacheName);
      if (options.plugins) {
        const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
        this._plugins = isUsingCacheWillUpdate ? options.plugins : [cacheOkAndOpaquePlugin, ...options.plugins];
      } else {
        this._plugins = [cacheOkAndOpaquePlugin];
      }
      this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
      if (true) {
        if (this._networkTimeoutSeconds) {
          finalAssertExports.isType(this._networkTimeoutSeconds, "number", {
            moduleName: "workbox-strategies",
            className: "NetworkFirst",
            funcName: "constructor",
            paramName: "networkTimeoutSeconds"
          });
        }
      }
      this._fetchOptions = options.fetchOptions;
      this._matchOptions = options.matchOptions;
    }
    async handle({ event, request }) {
      const logs = [];
      if (typeof request === "string") {
        request = new Request(request);
      }
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: "NetworkFirst",
          funcName: "handle",
          paramName: "makeRequest"
        });
      }
      const promises = [];
      let timeoutId;
      if (this._networkTimeoutSeconds) {
        const { id, promise } = this._getTimeoutPromise({ request, event, logs });
        timeoutId = id;
        promises.push(promise);
      }
      const networkPromise = this._getNetworkPromise({ timeoutId, request, event, logs });
      promises.push(networkPromise);
      let response = await Promise.race(promises);
      if (!response) {
        response = await networkPromise;
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart("NetworkFirst", request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url });
      }
      return response;
    }
    _getTimeoutPromise({ request, logs, event }) {
      let timeoutId;
      const timeoutPromise = new Promise((resolve) => {
        const onNetworkTimeout = async () => {
          if (true) {
            logs.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`);
          }
          resolve(await this._respondFromCache({ request, event }));
        };
        timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1e3);
      });
      return {
        promise: timeoutPromise,
        id: timeoutId
      };
    }
    async _getNetworkPromise({ timeoutId, request, logs, event }) {
      let error;
      let response;
      try {
        response = await fetchWrapper.fetch({
          request,
          event,
          fetchOptions: this._fetchOptions,
          plugins: this._plugins
        });
      } catch (err) {
        error = err;
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (true) {
        if (response) {
          logs.push(`Got response from network.`);
        } else {
          logs.push(`Unable to get a response from the network. Will respond with a cached response.`);
        }
      }
      if (error || !response) {
        response = await this._respondFromCache({ request, event });
        if (true) {
          if (response) {
            logs.push(`Found a cached response in the '${this._cacheName}' cache.`);
          } else {
            logs.push(`No response found in the '${this._cacheName}' cache.`);
          }
        }
      } else {
        const responseClone = response.clone();
        const cachePut = cacheWrapper.put({
          cacheName: this._cacheName,
          request,
          response: responseClone,
          event,
          plugins: this._plugins
        });
        if (event) {
          try {
            event.waitUntil(cachePut);
          } catch (err) {
            if (true) {
              logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
            }
          }
        }
      }
      return response;
    }
    _respondFromCache({ event, request }) {
      return cacheWrapper.match({
        cacheName: this._cacheName,
        request,
        event,
        matchOptions: this._matchOptions,
        plugins: this._plugins
      });
    }
  };

  // node_modules/.pnpm/workbox-strategies@5.1.4/node_modules/workbox-strategies/StaleWhileRevalidate.js
  var StaleWhileRevalidate = class {
    constructor(options = {}) {
      this._cacheName = cacheNames.getRuntimeName(options.cacheName);
      this._plugins = options.plugins || [];
      if (options.plugins) {
        const isUsingCacheWillUpdate = options.plugins.some((plugin) => !!plugin.cacheWillUpdate);
        this._plugins = isUsingCacheWillUpdate ? options.plugins : [cacheOkAndOpaquePlugin, ...options.plugins];
      } else {
        this._plugins = [cacheOkAndOpaquePlugin];
      }
      this._fetchOptions = options.fetchOptions;
      this._matchOptions = options.matchOptions;
    }
    async handle({ event, request }) {
      const logs = [];
      if (typeof request === "string") {
        request = new Request(request);
      }
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: "StaleWhileRevalidate",
          funcName: "handle",
          paramName: "request"
        });
      }
      const fetchAndCachePromise = this._getFromNetwork({ request, event });
      let response = await cacheWrapper.match({
        cacheName: this._cacheName,
        request,
        event,
        matchOptions: this._matchOptions,
        plugins: this._plugins
      });
      let error;
      if (response) {
        if (true) {
          logs.push(`Found a cached response in the '${this._cacheName}' cache. Will update with the network response in the background.`);
        }
        if (event) {
          try {
            event.waitUntil(fetchAndCachePromise);
          } catch (error2) {
            if (true) {
              logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
            }
          }
        }
      } else {
        if (true) {
          logs.push(`No response found in the '${this._cacheName}' cache. Will wait for the network response.`);
        }
        try {
          response = await fetchAndCachePromise;
        } catch (err) {
          error = err;
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart("StaleWhileRevalidate", request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
    async _getFromNetwork({ request, event }) {
      const response = await fetchWrapper.fetch({
        request,
        event,
        fetchOptions: this._fetchOptions,
        plugins: this._plugins
      });
      const cachePutPromise = cacheWrapper.put({
        cacheName: this._cacheName,
        request,
        response: response.clone(),
        event,
        plugins: this._plugins
      });
      if (event) {
        try {
          event.waitUntil(cachePutPromise);
        } catch (error) {
          if (true) {
            logger.warn(`Unable to ensure service worker stays alive when updating cache for '${getFriendlyURL(request.url)}'.`);
          }
        }
      }
      return response;
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    promise.then(() => {
    });
  }

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/DBWrapper.js
  var DBWrapper = class {
    constructor(name, version, { onupgradeneeded, onversionchange } = {}) {
      this._db = null;
      this._name = name;
      this._version = version;
      this._onupgradeneeded = onupgradeneeded;
      this._onversionchange = onversionchange || (() => this.close());
    }
    get db() {
      return this._db;
    }
    async open() {
      if (this._db)
        return;
      this._db = await new Promise((resolve, reject) => {
        let openRequestTimedOut = false;
        setTimeout(() => {
          openRequestTimedOut = true;
          reject(new Error("The open request was blocked and timed out"));
        }, this.OPEN_TIMEOUT);
        const openRequest = indexedDB.open(this._name, this._version);
        openRequest.onerror = () => reject(openRequest.error);
        openRequest.onupgradeneeded = (evt) => {
          if (openRequestTimedOut) {
            openRequest.transaction.abort();
            openRequest.result.close();
          } else if (typeof this._onupgradeneeded === "function") {
            this._onupgradeneeded(evt);
          }
        };
        openRequest.onsuccess = () => {
          const db = openRequest.result;
          if (openRequestTimedOut) {
            db.close();
          } else {
            db.onversionchange = this._onversionchange.bind(this);
            resolve(db);
          }
        };
      });
      return this;
    }
    async getKey(storeName, query) {
      return (await this.getAllKeys(storeName, query, 1))[0];
    }
    async getAll(storeName, query, count) {
      return await this.getAllMatching(storeName, { query, count });
    }
    async getAllKeys(storeName, query, count) {
      const entries = await this.getAllMatching(storeName, { query, count, includeKeys: true });
      return entries.map((entry) => entry.key);
    }
    async getAllMatching(storeName, {
      index,
      query = null,
      direction = "next",
      count,
      includeKeys = false
    } = {}) {
      return await this.transaction([storeName], "readonly", (txn, done) => {
        const store = txn.objectStore(storeName);
        const target = index ? store.index(index) : store;
        const results = [];
        const request = target.openCursor(query, direction);
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            results.push(includeKeys ? cursor : cursor.value);
            if (count && results.length >= count) {
              done(results);
            } else {
              cursor.continue();
            }
          } else {
            done(results);
          }
        };
      });
    }
    async transaction(storeNames, type, callback) {
      await this.open();
      return await new Promise((resolve, reject) => {
        const txn = this._db.transaction(storeNames, type);
        txn.onabort = () => reject(txn.error);
        txn.oncomplete = () => resolve();
        callback(txn, (value) => resolve(value));
      });
    }
    async _call(method, storeName, type, ...args) {
      const callback = (txn, done) => {
        const objStore = txn.objectStore(storeName);
        const request = objStore[method].apply(objStore, args);
        request.onsuccess = () => done(request.result);
      };
      return await this.transaction([storeName], type, callback);
    }
    close() {
      if (this._db) {
        this._db.close();
        this._db = null;
      }
    }
  };
  DBWrapper.prototype.OPEN_TIMEOUT = 2e3;
  var methodsToWrap = {
    readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
    readwrite: ["add", "put", "clear", "delete"]
  };
  for (const [mode, methods] of Object.entries(methodsToWrap)) {
    for (const method of methods) {
      if (method in IDBObjectStore.prototype) {
        DBWrapper.prototype[method] = async function(storeName, ...args) {
          return await this._call(method, storeName, mode, ...args);
        };
      }
    }
  }

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/_private/deleteDatabase.js
  var deleteDatabase = async (name) => {
    await new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(name);
      request.onerror = () => {
        reject(request.error);
      };
      request.onblocked = () => {
        reject(new Error("Delete blocked"));
      };
      request.onsuccess = () => {
        resolve();
      };
    });
  };

  // node_modules/.pnpm/workbox-expiration@5.1.4/node_modules/workbox-expiration/_version.js
  try {
    self["workbox:expiration:5.1.4"] && _();
  } catch (e) {
  }

  // node_modules/.pnpm/workbox-expiration@5.1.4/node_modules/workbox-expiration/models/CacheTimestampsModel.js
  var DB_NAME = "workbox-expiration";
  var OBJECT_STORE_NAME = "cache-entries";
  var normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = "";
    return url.href;
  };
  var CacheTimestampsModel = class {
    constructor(cacheName) {
      this._cacheName = cacheName;
      this._db = new DBWrapper(DB_NAME, 1, {
        onupgradeneeded: (event) => this._handleUpgrade(event)
      });
    }
    _handleUpgrade(event) {
      const db = event.target.result;
      const objStore = db.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
      objStore.createIndex("cacheName", "cacheName", { unique: false });
      objStore.createIndex("timestamp", "timestamp", { unique: false });
      deleteDatabase(this._cacheName);
    }
    async setTimestamp(url, timestamp) {
      url = normalizeURL(url);
      const entry = {
        url,
        timestamp,
        cacheName: this._cacheName,
        id: this._getId(url)
      };
      await this._db.put(OBJECT_STORE_NAME, entry);
    }
    async getTimestamp(url) {
      const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
      return entry.timestamp;
    }
    async expireEntries(minTimestamp, maxCount) {
      const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, "readwrite", (txn, done) => {
        const store = txn.objectStore(OBJECT_STORE_NAME);
        const request = store.index("timestamp").openCursor(null, "prev");
        const entriesToDelete2 = [];
        let entriesNotDeletedCount = 0;
        request.onsuccess = () => {
          const cursor = request.result;
          if (cursor) {
            const result = cursor.value;
            if (result.cacheName === this._cacheName) {
              if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
                entriesToDelete2.push(cursor.value);
              } else {
                entriesNotDeletedCount++;
              }
            }
            cursor.continue();
          } else {
            done(entriesToDelete2);
          }
        };
      });
      const urlsDeleted = [];
      for (const entry of entriesToDelete) {
        await this._db.delete(OBJECT_STORE_NAME, entry.id);
        urlsDeleted.push(entry.url);
      }
      return urlsDeleted;
    }
    _getId(url) {
      return this._cacheName + "|" + normalizeURL(url);
    }
  };

  // node_modules/.pnpm/workbox-expiration@5.1.4/node_modules/workbox-expiration/CacheExpiration.js
  var CacheExpiration = class {
    constructor(cacheName, config = {}) {
      this._isRunning = false;
      this._rerunRequested = false;
      if (true) {
        finalAssertExports.isType(cacheName, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "cacheName"
        });
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._maxEntries = config.maxEntries;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheName = cacheName;
      this._timestampModel = new CacheTimestampsModel(cacheName);
    }
    async expireEntries() {
      if (this._isRunning) {
        this._rerunRequested = true;
        return;
      }
      this._isRunning = true;
      const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
      const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
      const cache = await self.caches.open(this._cacheName);
      for (const url of urlsExpired) {
        await cache.delete(url);
      }
      if (true) {
        if (urlsExpired.length > 0) {
          logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
          logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
          urlsExpired.forEach((url) => logger.log(`    ${url}`));
          logger.groupEnd();
        } else {
          logger.debug(`Cache expiration ran and found no entries to remove.`);
        }
      }
      this._isRunning = false;
      if (this._rerunRequested) {
        this._rerunRequested = false;
        dontWaitFor(this.expireEntries());
      }
    }
    async updateTimestamp(url) {
      if (true) {
        finalAssertExports.isType(url, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "updateTimestamp",
          paramName: "url"
        });
      }
      await this._timestampModel.setTimestamp(url, Date.now());
    }
    async isURLExpired(url) {
      if (!this._maxAgeSeconds) {
        if (true) {
          throw new WorkboxError(`expired-test-without-max-age`, {
            methodName: "isURLExpired",
            paramName: "maxAgeSeconds"
          });
        }
        return false;
      } else {
        const timestamp = await this._timestampModel.getTimestamp(url);
        const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
        return timestamp < expireOlderThan;
      }
    }
    async delete() {
      this._rerunRequested = false;
      await this._timestampModel.expireEntries(Infinity);
    }
  };

  // node_modules/.pnpm/workbox-core@5.1.4/node_modules/workbox-core/registerQuotaErrorCallback.js
  function registerQuotaErrorCallback(callback) {
    if (true) {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (true) {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }

  // node_modules/.pnpm/workbox-expiration@5.1.4/node_modules/workbox-expiration/ExpirationPlugin.js
  var ExpirationPlugin = class {
    constructor(config = {}) {
      this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
        if (!cachedResponse) {
          return null;
        }
        const isFresh = this._isResponseDateFresh(cachedResponse);
        const cacheExpiration = this._getCacheExpiration(cacheName);
        dontWaitFor(cacheExpiration.expireEntries());
        const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
        if (event) {
          try {
            event.waitUntil(updateTimestampDone);
          } catch (error) {
            if (true) {
              if ("request" in event) {
                logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
              }
            }
          }
        }
        return isFresh ? cachedResponse : null;
      };
      this.cacheDidUpdate = async ({ cacheName, request }) => {
        if (true) {
          finalAssertExports.isType(cacheName, "string", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "cacheName"
          });
          finalAssertExports.isInstance(request, Request, {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "request"
          });
        }
        const cacheExpiration = this._getCacheExpiration(cacheName);
        await cacheExpiration.updateTimestamp(request.url);
        await cacheExpiration.expireEntries();
      };
      if (true) {
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._config = config;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheExpirations = /* @__PURE__ */ new Map();
      if (config.purgeOnQuotaError) {
        registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
      }
    }
    _getCacheExpiration(cacheName) {
      if (cacheName === cacheNames.getRuntimeName()) {
        throw new WorkboxError("expire-custom-caches-only");
      }
      let cacheExpiration = this._cacheExpirations.get(cacheName);
      if (!cacheExpiration) {
        cacheExpiration = new CacheExpiration(cacheName, this._config);
        this._cacheExpirations.set(cacheName, cacheExpiration);
      }
      return cacheExpiration;
    }
    _isResponseDateFresh(cachedResponse) {
      if (!this._maxAgeSeconds) {
        return true;
      }
      const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
      if (dateHeaderTimestamp === null) {
        return true;
      }
      const now = Date.now();
      return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
    }
    _getDateHeaderTimestamp(cachedResponse) {
      if (!cachedResponse.headers.has("date")) {
        return null;
      }
      const dateHeader = cachedResponse.headers.get("date");
      const parsedDate = new Date(dateHeader);
      const headerTime = parsedDate.getTime();
      if (isNaN(headerTime)) {
        return null;
      }
      return headerTime;
    }
    async deleteCacheAndMetadata() {
      for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
        await self.caches.delete(cacheName);
        await cacheExpiration.delete();
      }
      this._cacheExpirations = /* @__PURE__ */ new Map();
    }
  };

  // assets/scripts/workbox.js
  registerRoute(({ request }) => request.destination === "script" || request.destination === "style", new StaleWhileRevalidate({
    cacheName: "static-cache"
  }));
  registerRoute(({ request }) => request.destination === "document", new NetworkFirst({
    cacheName: "html-cache"
  }));
  registerRoute(({ request }) => request.destination === "image", new CacheFirst({
    cacheName: "image-cache",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  }));
})();
