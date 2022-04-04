import React from 'react';

const Inventory = () => {
    return (
        <div>
            <h2>





                The Context API from React is described as
                context provides a way to pass data through
                the component tree without having to pass props
                down manually at every single level.In React we
                send data from one component to another
                component.So,the data of one component
                (parent) has to be sent to another child
                component as props. We face a situation
                where the child component is much lower
                than our parent component where our data
                is.Now if we want to take data from the
                parent component to a child component below many
                levels, then we have to take help from the parent
                of that child component and the parent of that parent to the data component or up to the top-level
                component to pass data. This is called Props Drilling. This is how React's Context API works.


            </h2>

            <h1>


                Elements such as header, footer, article, and  section
                are called semantics tag because they properly explains an element's function.And what type of element might be included among them.It
                includes meaning to our web page.For example, a footer tag indicates the footer section. This is semantic and because people can
                understand them, and browsers know how to display them.

            </h1>


        </div>
    );
};

export default Inventory;