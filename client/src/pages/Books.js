import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";

class Books extends Component {
  state = {
    books: [],
    title: null,
    author: null,
    synopsis: null
  };

  componentDidMount() {
    this.loadBooks();
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(this.state);
  }

  handleClick = event => {
    event.preventDefault();
    console.log("task");
    axios({
      method: 'post',
      url: '/api/books',
      data: this.state
    })
      .then(function (response) {
        console.log(response);
      });

  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input handlechange={this.handleChange} name="title" placeholder="Title (required)" />
              <Input handlechange={this.handleChange} name="author" placeholder="Author (required)" />
              <TextArea handlechange={this.handleChange} name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn handleclick={this.handleClick}>Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;



