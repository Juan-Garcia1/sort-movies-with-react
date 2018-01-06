## Sort Movies By Rating or Alphabetical Order Using React

Sort movies by selecting: 
* Low rating
* High rating
* A-Z
* Z-A

```javascript


 <form onSubmit={this.handleSubmit}>
    <select id="rating-filter" value={selectedValue} onChange={this.handleChange}>
      <option value="Sort">Sort</option>
       <option value="Low rating">Low rating</option>
       <option value="High rating">High rating</option>
       <option value="A-Z">A-Z</option>
       <option value="Z-A">Z-A</option>
    </select>
    <input type="submit" value="Filter" />
 </form>
``` 
---


```javascript

 handleSubmit = e => {
    const { value, movies } = this.state

    switch (value) {
      case "Low rating":
          this.setState({
            movies: movies.sort((a,b) => a.rating > b.rating ? 1 : -1)
          })
        break;
        case "High rating":
          this.setState({
            movies: movies.sort((a,b) => b.rating > a.rating ? 1 : -1)
          })
          break;
          case "A-Z":
            this.setState({
              movies: movies.sort((a,b) => strip(a.title) > strip(b.title) ? 1 : -1)
            })
            break;
            case "Z-A":
              this.setState({
                movies: movies.sort((a,b) => strip(b.title) > strip(a.title) ? 1 : -1)
              })
              break;
              default:
                this.setState({
                  movies: movies
                })
              break;
    }
e.preventDefault();
  }
```
