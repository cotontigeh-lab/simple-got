export const ApiRoutes = {
  Book: (id:number|string) => `https://anapioficeandfire.com/api/books/${id}`,
  Books: (pageSize: number = 5) => `https://www.anapioficeandfire.com/api/books?pageSize=${pageSize}`,
  Character: (id:number|string) => `https://anapioficeandfire.com/api/characters/${id}`,
  Characters: (pageSize: number = 5) => `https://anapioficeandfire.com/api/characters?pageSize=${pageSize}`
}