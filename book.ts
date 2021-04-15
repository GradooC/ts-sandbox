export function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

function Foo(Book, name, author) {
    return new Book(name, author);
}

const res = Foo(Book, 'Учебник javascript', 'Петр Сергеев');
console.log('🚀 ~ file: book.ts ~ line 11 ~ res', res.name);
