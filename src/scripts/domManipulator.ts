import { subscribe } from "./pubsub";

type HTMLFunc = () => HTMLElement | SVGElement;
type Child = HTMLFunc | HTMLFunc[];
type ChildFunc = (child?: Child) => HTMLFunc;
type ChildFuncArr = ChildFunc[];

const checkIfFuncContainsFake = (
  func: Child | { (): HTMLDivElement; fake: boolean }
): func is { (): HTMLDivElement; fake: boolean } => "fake" in func;

const createElement = (
  elementName: string,
  classNames?: string[] | null,
  textContent?: string | null,
  id?: string | null,
  attributes?: [string, string][] | null,
  eventListeners?: [string, (event: Event) => void][] | null
) => {
  const container: HTMLElement = document.createElement(elementName);

  if (classNames) {
    classNames.forEach((className) => {
      container.classList.add(className);
    });
  }
  if (textContent) {
    container.textContent = textContent;
  }
  if (id) {
    container.id = id;
  }
  if (attributes) {
    attributes.forEach((attribute) => {
      container.setAttribute(attribute[0], attribute[1]);
    });
  }
  if (eventListeners) {
    eventListeners.forEach((eventListener) => {
      container.addEventListener(eventListener[0], eventListener[1]);
    });
  }

  return (child?: Child | { (): HTMLDivElement; fake: boolean }) => {
    if (child) {
      if (!Array.isArray(child)) {
        if (checkIfFuncContainsFake(child)) {
          return () => container;
        }
        container.appendChild(child());
      } else {
        child.forEach((element) => {
          container.appendChild(element());
        });
      }
    }
    return () => container;
  };
};

const createSVG = (
  elementName: string,
  classNames?: string[] | null,
  textContent?: string | null,
  id?: string | null,
  attributes?: [string, string][] | null,
  eventListeners?: [string, (container: SVGElement) => void][] | null,
  uniqueScriptName?: string | null,
  scripts?: [string, (...args: unknown[]) => void][] | null
) => {
  const container: SVGElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    elementName
  );

  if (classNames) {
    classNames.forEach((className) => {
      container.classList.add(className);
    });
  }
  if (textContent) {
    container.textContent = textContent;
  }
  if (id) {
    container.id = id;
  }
  if (attributes) {
    attributes.forEach((attribute) => {
      container.setAttribute(attribute[0], attribute[1]);
    });
  }
  if (eventListeners) {
    eventListeners.forEach((eventListener) => {
      const eventWrapper = () => {
        eventListener[1](container);
      };

      container.addEventListener(eventListener[0], eventWrapper);
    });
  }

  if (uniqueScriptName) {
    const addClass = (className: unknown) => {
      if (typeof className === "string") {
        container.classList.add(className);
      }
    };

    const removeClass = (className: unknown) => {
      if (typeof className === "string") {
        container.classList.remove(className);
      }
    };

    const setAttribute = (attribute: unknown, value: unknown) => {
      if (typeof attribute === "string" && typeof value === "string") {
        if (value === "") {
          container.removeAttribute(attribute);
        } else {
          container.setAttribute(attribute, value);
        }
      }
    };

    const setText = (text: unknown) => {
      if (typeof text === "string") {
        container.textContent = text;
      }
    };

    subscribe(`${uniqueScriptName}-addClass`, addClass);
    subscribe(`${uniqueScriptName}-removeClass`, removeClass);
    subscribe(`${uniqueScriptName}-setAttribute`, setAttribute);
    subscribe(`${uniqueScriptName}-setText`, setText);

    if (scripts) {
      scripts.forEach((script) => {
        const scriptWrapper = (...args: unknown[]) => {
          script[1](container, ...args);
        };
        subscribe(`${uniqueScriptName}-${script[0]}`, scriptWrapper);
      });
    }
  }

  return (child?: Child | { (): HTMLDivElement; fake: boolean }) => {
    if (child) {
      if (!Array.isArray(child)) {
        if (checkIfFuncContainsFake(child)) {
          return () => container;
        }
        container.appendChild(child());
      } else {
        child.forEach((element) => {
          container.appendChild(element());
        });
      }
    }
    return () => container;
  };
};

const checkIfTypeChildFuncArr = (
  arr: ChildFunc | ChildFuncArr
): arr is ChildFuncArr => Array.isArray(arr);

const composeElements = (arr: (ChildFunc | ChildFuncArr)[]): ChildFuncArr => {
  const fakeDiv = () => document.createElement("div");
  fakeDiv.fake = true;

  const returnContainer = arr.reduce<Child>((acc, curr) => {
    if (checkIfTypeChildFuncArr(curr)) {
      return curr.map((func) => func(undefined));
    }

    return curr(acc);
  }, fakeDiv);

  if (Array.isArray(returnContainer)) {
    return returnContainer.map((htmlFunc) => {
      const container = htmlFunc();

      return () => () => container;
    });
  }

  const container = returnContainer();
  return [() => () => container];
};

const fixElement = (body: HTMLElement, child: ChildFuncArr[]) => {
  body.replaceChildren();
  child.forEach((func) => {
    func.forEach((element) => {
      body.appendChild(element()());
    });
  });
};

export type { ChildFunc };
export { fixElement, composeElements, createElement, createSVG };
