# Example todo service

Ussage: http://localhost:4000/api/v1/todos

#### Pagination queries:
| Query | Description                | Default |
|-------|----------------------------|---------|
| page  | current page               | 1       |
| limit | displayed results per page | 15      |
##### Example:
    http://localhost:4000/api/v1/todos?page=2&limit=50

#### Filter queries:
    [key] : [value]
##### This type of queries are parsed to a sequalize format with this rules:
- IsNumber: key: value
- IsString: key: {$like:`%${value}%`}
- IsDate: Not implemented yet!
##### Examples:
    http://localhost:4000/api/v1/todos?page=2&limit=50&status=pend
    http://localhost:4000/api/v1/todos?id=3

### Response
```javascript
{
    status: 200,
    data:[
    {
     id: 1,
     title:"Todo 1",
     description: "Todo description",
     status: "pending"
    }
    ...
    ],
    meta: {
        pageCount: 5,
        total: 20,
        limit: 4,
        currentPage: 1
    }
}
```
