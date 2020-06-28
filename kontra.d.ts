declare namespace kontra {
  function on(event: string, callback: Function): void;
  function off(event: string, callback: Function): void;
  function emit(event: string, ...args: any): void;
  function getCanvas(): HTMLCanvasElement;
  function getContext(): CanvasRenderingContext2D;
  function init(canvas?: string | HTMLCanvasElement): {canvas: HTMLCanvasElement, context: CanvasRenderingContext2D};
  interface Animation {
    spriteSheet: SpriteSheet;
    frames: number[];
    frameRate: number;
    loop: boolean;
    width: number;
    height: number;
    margin: number;
    clone(): Animation;
    reset(): void;
    update(dt?: number): void;
    render(properties: {x: number, y: number, width?: number, height?: number, context?: CanvasRenderingContext2D}): void;
  }
  interface AnimationConstructor {
    readonly class: AnimationConstructor;
    readonly prototype: Animation;
    new(properties: {spriteSheet: SpriteSheet, frames: number[], frameRate: number, loop?: boolean}): Animation;
    (properties: {spriteSheet: SpriteSheet, frames: number[], frameRate: number, loop?: boolean}): Animation;
  }
  var Animation: AnimationConstructor
  var imageAssets: {[name: string]: HTMLImageElement};
  var audioAssets: {[name: string]: HTMLAudioElement};
  var dataAssets: {[name: string]: any};
  function setImagePath(path: string): void;
  function setAudioPath(path: string): void;
  function setDataPath(path: string): void;
  function loadImage(url: string): Promise<HTMLImageElement>;
  function loadAudio(url: string): Promise<HTMLAudioElement>;
  function loadData(url: string): Promise<any>;
  function load(...urls: string[]): Promise<any[]>;
  function degToRad(deg: number): number;
  function radToDeg(rad: number): number;
  function angleToTarget(source: {x: number, y: number}, target: {x: number, y: number}): number;
  function randInt(min: number, max: number): number;
  function seedRand(str: string): () => number;
  function lerp(start: number, end: number, percent: number): number;
  function inverseLerp(start: number, end: number, value: number): number;
  function clamp(min: number, max: number, value: number): number;
  function setStoreItem(key: string, value: any): void;
  function getStoreItem(key: string): any;
  function collides(obj1: object, obj2: object): boolean | null;
  interface Vector {
    add(vector: Vector | {x: number, y: number}): Vector;
    subtract(vector: Vector | {x: number, y: number}): Vector;
    scale(value: number): Vector;
    normalize(): Vector;
    dot(vector: Vector | {x: number, y: number}): number;
    length​​(): number;
    distance(vector: Vector | {x: number, y: number}): number;
    angle(vector: Vector): number;
    clamp(xMin: number, yMin: number, xMax: number, yMax: number): void;
    x: number;
    y: number;
  }
  interface VectorConstructor {
    readonly class: VectorConstructor;
    readonly prototype: Vector;
    new(x?: number, y?: number): Vector;
    (x?: number, y?: number): Vector;
  }
  var Vector: VectorConstructor
  interface GameObject {
    init(properties: object): void;
    position: Vector;
    width: number;
    height: number;
    context: CanvasRenderingContext2D;
    parent: GameObject | null;
    children: GameObject[];
    velocity: Vector;
    acceleration: Vector;
    rotation: number;
    ttl: number;
    anchor: {x: number, y: number};
    sx: number;
    sy: number;
    scale: {x: number, y: number};
    x: number;
    y: number;
    dx: number;
    dy: number;
    ddx: number;
    ddy: number;
    readonly viewX: number;
    readonly viewY: number;
    isAlive(): boolean;
    addChild(child: GameObject, options: {absolute?: boolean}): void;
    removeChild(child: GameObject): void;
    setScale(x: number, y?: number): void;
    update(dt?: number): void;
    advance(dt?: number): void;
    render(): void;
    draw(): void;
    [prop: string]: any;
  }
  interface GameObjectConstructor {
    readonly class: GameObjectConstructor;
    readonly prototype: GameObject;
    new(properties?: {x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, width?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): GameObject;
    (properties?: {x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, width?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): GameObject;
  }
  var GameObject: GameObjectConstructor
  interface Sprite extends GameObject {
    color: string;
    width: number;
    height: number;
    image: HTMLImageElement | HTMLCanvasElement;
    animations: object;
    currentAnimation: Animation;
    playAnimation(name: string): void;
  }
  interface SpriteConstructor {
    readonly class: SpriteConstructor;
    readonly prototype: Sprite;
    new(properties?: {color?: string, image?: HTMLImageElement | HTMLCanvasElement, animations?: object, x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, width?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): Sprite;
    (properties?: {color?: string, image?: HTMLImageElement | HTMLCanvasElement, animations?: object, x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, width?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): Sprite;
  }
  var Sprite: SpriteConstructor
  interface Text extends GameObject {
    textAlign: string;
    font: string;
    color: string;
    text: string;
  }
  interface TextConstructor {
    readonly class: TextConstructor;
    readonly prototype: Text;
    new(properties: {text: string, font?: string, color?: string, width?: number, textAlign?: string, x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): Text;
    (properties: {text: string, font?: string, color?: string, width?: number, textAlign?: string, x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): Text;
  }
  var Text: TextConstructor
  var pointer: {x: number, y: number, radius: number};
  function initPointer(): void;
  function track(...objects: object[]): void;
  function untrack(...objects: object[]): void;
  function pointerOver(object: object): boolean;
  function onPointerDown(callback: (evt: MouseEvent | TouchEvent, object?: object) => void): void;
  function onPointerUp(callback: (evt: MouseEvent | TouchEvent, object?: object) => void): void;
  function pointerPressed(button: string): boolean;
  interface Button extends Text {
    destroy(): void;
    enable(): void;
    disabled: boolean;
    disable(): void;
    focus(): void;
    focused: boolean;
    blur(): void;
    hovered: boolean;
    onEnable(): void;
    onDisable(): void;
    onFocus(): void;
    onBlur(): void;
  }
  interface ButtonConstructor {
    readonly class: ButtonConstructor;
    readonly prototype: Button;
    new(properties: {onEnable?: Function, onDisable?: Function, onFocus?: Function, onBlur?: Function, onUp?: Function, text: string, font?: string, color?: string, width?: number, textAlign?: string, x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): Button;
    (properties: {onEnable?: Function, onDisable?: Function, onFocus?: Function, onBlur?: Function, onUp?: Function, text: string, font?: string, color?: string, width?: number, textAlign?: string, x?: number, y?: number, dx?: number, dy?: number, ddx?: number, ddy?: number, height?: number, ttl?: number, rotation?: number, anchor?: {x: number, y: number}, children?: GameObject[], scale?: {x: number, y: number}, context?: CanvasRenderingContext2D, update?: (dt?: number) => void, render?: Function, [props: string]: any}): Button;
  }
  var Button: ButtonConstructor
  interface GameLoop {
    update(dt?: number): void;
    render(): void;
    isStopped: boolean;
    start(): void;
    stop(): void;
  }
  interface GameLoopConstructor {
    readonly class: GameLoopConstructor;
    readonly prototype: GameLoop;
    new(properties: {update: (dt?: number) => void, render: Function, fps?: number, clearCanvas?: boolean}): GameLoop;
    (properties: {update: (dt?: number) => void, render: Function, fps?: number, clearCanvas?: boolean}): GameLoop;
  }
  var GameLoop: GameLoopConstructor
  var keyMap: {[key in (string | number)]: string};
  function initKeys(): void;
  function bindKeys(keys: string | string[], callback: (evt: KeyboardEvent) => void): void;
  function unbindKeys(keys: string | string[]): void;
  function keyPressed(key: string): boolean;
  function registerPlugin(kontraObj: object, pluginObj: object): void;
  function unregisterPlugin(kontraObj: object, pluginObj: object): void;
  function extendObject(kontraObj: object, properties: object): void;
  interface Pool {
    objects: object[];
    size: number;
    maxSize: number;
    get(properties?: object): object;
    getAliveObjects(): object[];
    clear(): void;
    update(dt?: number): void;
    render(): void;
  }
  interface PoolConstructor {
    readonly class: PoolConstructor;
    readonly prototype: Pool;
    new(properties: {create: () => {update: (dt?: number) => void, render: Function, init: (properties?: object) => void, isAlive: () => boolean}, maxSize?: number}): Pool;
    (properties: {create: () => {update: (dt?: number) => void, render: Function, init: (properties?: object) => void, isAlive: () => boolean}, maxSize?: number}): Pool;
  }
  var Pool: PoolConstructor
  interface Quadtree {
    maxDepth: number;
    maxObjects: number;
    bounds: {x: number, y: number, width: number, height: number};
    clear(): void;
    get(object: {x: number, y: number, width: number, height: number}): object[];
    add(...objects: object[]): void;
  }
  interface QuadtreeConstructor {
    readonly class: QuadtreeConstructor;
    readonly prototype: Quadtree;
    new(properties?: {maxDepth?: number, maxObjects?: number, bounds?: {x: number, y: number, width: number, height: number}}): Quadtree;
    (properties?: {maxDepth?: number, maxObjects?: number, bounds?: {x: number, y: number, width: number, height: number}}): Quadtree;
  }
  var Quadtree: QuadtreeConstructor
  interface Scene {
    id: string;
    name: string;
    children: object[];
    show(): void;
    hidden: boolean;
    hide(): void;
    add(...objects: object[]): void;
    remove(object: object): void;
    destroy(): void;
    update(dt?: number): void;
    render(): void;
    onShow(): void;
    onHide(): void;
  }
  interface SceneConstructor {
    readonly class: SceneConstructor;
    readonly prototype: Scene;
    new(properties: {id: string, name?: string, children?: object[], [props: string]: any}): Scene;
    (properties: {id: string, name?: string, children?: object[], [props: string]: any}): Scene;
  }
  var Scene: SceneConstructor
  interface SpriteSheet {
    animations: object;
    image: HTMLImageElement | HTMLCanvasElement;
    frame: object;
    createAnimations(animations: object): void;
  }
  interface SpriteSheetConstructor {
    readonly class: SpriteSheetConstructor;
    readonly prototype: SpriteSheet;
    new(properties: {image: HTMLImageElement | HTMLCanvasElement, frameWidth: number, frameHeight: number, frameMargin?: number, atlas?: object, animations?: object}): SpriteSheet;
    (properties: {image: HTMLImageElement | HTMLCanvasElement, frameWidth: number, frameHeight: number, frameMargin?: number, atlas?: object, animations?: object}): SpriteSheet;
  }
  var SpriteSheet: SpriteSheetConstructor
  interface TileEngine {
    width: number;
    height: number;
    tilewidth: number;
    tileheight: number;
    layers: object[];
    tilesets: object[];
    context: CanvasRenderingContext2D;
    mapwidth: number;
    mapheight: number;
    sx: number;
    sy: number;
    render(): void;
    renderLayer(name: string): void;
    layerCollidesWith(name: string, object: object): boolean;
    tileAtLayer(name: string, position: {x: number, y: number} | {row: number, col: number}): number;
    setTileAtLayer(name: string, position: {x: number, y: number} | {row: number, col: number}, tile: number): void;
    setLayer(name: string, data: number[]): void;
    addObject(object: object): void;
    removeObject(object: object): void;
  }
  interface TileEngineConstructor {
    readonly class: TileEngineConstructor;
    readonly prototype: TileEngine;
    new(properties: {width: number, height: number, tilewidth: number, tileheight: number, context?: CanvasRenderingContext2D, tilesets: object[], layers: object[]}): TileEngine;
    (properties: {width: number, height: number, tilewidth: number, tileheight: number, context?: CanvasRenderingContext2D, tilesets: object[], layers: object[]}): TileEngine;
  }
  var TileEngine: TileEngineConstructor
}

export = kontra