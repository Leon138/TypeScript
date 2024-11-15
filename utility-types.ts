//task1:

// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

type FIXME1 = Omit<OrderState1, 'buyingSupplies' | 'producing'>[];

type OrderState1 =
  | "initial"
  | "inWork"
  | "buyingSupplies"
  | "producing"
  | "fullfilled";

export const getUserOrderStates1 = (orderStates: OrderState1[]): FIXME1 => {
  const filteredStates = [] as FIXME1;
  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};

//---------------------------------------------------------------------------------------------------------

//task2:

// Есть объединение (юнион) типов заказов в различных состояниях
// Нужно заменить FIXME на тип который достанет из Order все возможные состояния (state)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME2 = Order2State["state"];

type Order2State = Pick<Order2, 'state'>;

type Order2 =
  | {
      state: "initial";
      sum: number;
    }
  | {
      state: "inWork";
      sum: number;
      workerId: number;
    }
  | {
      state: "buyingSupplies";
      sum: number;
      workerId: number;
      suppliesSum: number;
    }
  | {
      state: "producing";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
    }
  | {
      state: "fullfilled";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
      fullfillmentDate: Date;
    };

export const getOrderState = (order: Order2): FIXME2 => order.state;

//---------------------------------------------------------------------------------------------------------

//task3:

// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

type FIXME3 = Extract<Order4, {state: "initial"} | {state: "inWork"}> | null;


type Order4 =
  | {
      state: "initial";
      sum: number;
    }
  | {
      state: "inWork";
      sum: number;
      workerId: number;
    }
  | {
      state: "buyingSupplies";
      sum: number;
      workerId: number;
      suppliesSum: number;
    }
  | {
      state: "producing";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
    }
  | {
      state: "fullfilled";
      sum: number;
      workerId: number;
      suppliesSum: number;
      produceEstimate: Date;
      fullfillmentDate: Date;
    };

export const filterOnlyInitialAndInWorkOrder = (order: Order4): FIXME3 => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};

//---------------------------------------------------------------------------------------------------------

//task 4:

type FIXME4 = Omit<OrderState5, "buyingSupplies"| "producing">[];

type OrderState5 =
  | "initial"
  | "inWork"
  | "buyingSupplies"
  | "producing"
  | "fullfilled";

export const getUserOrderStates5 = (orderStates: OrderState5[]): FIXME4 => {
  return orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
};
