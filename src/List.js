import { Button, Card, Row, Col, Badge, Stack } from "react-bootstrap";
import { FaTimes, FaCheck } from "react-icons/fa";

const List = ({ todoList, deleteTodo, finishTodo, editTodo }) => {
  return (
    <div className="mt-5">
      {todoList.map((value, index) => {
        return (
          <Card className="mt-3" key={index.toString()}>
            <Card.Body>
              <Row>
                {/* Nama Todo */}
                <Stack direction="horizontal">
                  <Col>
                    <h3>{value.todoName}</h3>
                  </Col>

                  {/* Button nya */}
                  <Col xl="1" className="me-3 mb-1">
                    {value.status ? (
                      <Badge bg="success" className="mt-2 fs-6">
                        Selesai
                      </Badge>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col xl="1">
                    <Button
                      onClick={() => finishTodo(index)}
                      variant={value.status ? "secondary" : "primary"}
                    >
                      {value.status ? <FaTimes /> : <FaCheck />}
                    </Button>
                  </Col>
                </Stack>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="danger"
                    className="mt-2"
                    onClick={() => deleteTodo(index)}
                  >
                    Hapus
                  </Button>
                  <Button
                    onClick={() => {
                      const newTodoName = prompt(
                        "Masukkan tugas baru",
                        value.todoName
                      );

                      if (newTodoName) {
                        editTodo(index, newTodoName);
                      }
                    }}
                    variant="warning"
                    className="ms-2 mt-2"
                  >
                    Edit
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default List;
