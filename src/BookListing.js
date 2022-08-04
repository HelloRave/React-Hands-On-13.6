import React, {useContext} from "react";
import BookContext from "./BookContext";

export default function BookListing() {
  const context = useContext(BookContext)
  return <React.Fragment>
    <ul>
      {context.book().books.map(b => {
        return(
          <li>{b.title} {b.author}</li>
        )
      })}
    </ul>
  </React.Fragment>;
}
