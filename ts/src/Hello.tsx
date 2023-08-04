const App = () => {
    let name: string | number = "aa";
    name = 12;

    let boolbool: boolean | string = true;
    boolbool = 'ok';

    const array: (string | number)[] = ['a', 'b'];
    array.push(1);
    console.log(array);

    const userObj: {
        name: string,
        age: number,
        bool: boolean,
        next?: string
    } = {
        name: "hah",
        age: 21,
        bool: true
    };
    userObj.next = "12";

    const stringReturn = (): string => "ok par";
    const numberParam = (num1: number, num2: number, another?: string): number => {
        console.log(another);
        return num1 + num2
    };
    const objFun = (user: { name: string, age: number, opt?: boolean }): object => {
        return user;
    };
    numberParam(2, 1, "a");
    objFun({ name: "aa", age: 23, opt: true })

    // types
    type userType = {
        name: string,
        age: number,
        isDev?: boolean,
        theme?: "light" | "dark"
    }
    const userFun = (user: userType): void => console.log(user.name);
    const me: userType = {
        name: "hello my name",
        age: 32,
        theme: "dark"
    }

    type myFuncType = (a: string, b: string) => string | void
    const myFunc: myFuncType = (a, b) => a + b;
    console.log(myFunc("he", "llo"));

    // interfaces
    interface IPost {
        id: number;
        title: string
    }

    interface IPost2<T> {
        id: number,
        title: string,
        extra: T[]
    }

    interface IPost3<T extends object> {
        id: number,
        title: string,
        extra: T[]
    }

    const blodPost: IPost = {
        id: 1,
        title: "hello"
    }

    const blogPost2: IPost2<string> = {
        id: 1,
        title: 'ok',
        extra: ['a', 'b']
    }

    const blogPost3: IPost3<IPost> = {
        id: 1,
        title: "hello",
        extra: [{ id: 1, title: 'ok' }]
    }

    return (
        <div>App</div>
    )
}

export default App