import { Card, Stack, Form, Button } from "react-bootstrap";

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            type="text"
            placeholder="Masukan Todo..."
            onChange={handleChangeTodoName}
            value={todoName}
          />
          <Button onClick={addTodo}>Tambah</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default Add;
