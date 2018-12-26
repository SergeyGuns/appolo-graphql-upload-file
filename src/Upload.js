import React from "react";
const gql = require("graphql-tag");
const { Mutation } = require("react-apollo");

const UploadFile = () => (
  <Mutation
    mutation={gql`
      mutation($file: Upload!) {
        singleUpload(file: $file) {
          path
        }
      }
    `}
  >
    {mutate => (
      <input
        type="file"
        required
        onChange={({
          target: {
            validity,
            files: [file]
          }
        }) => validity.valid && mutate({ variables: { file } })}
      />
    )}
  </Mutation>
);
export default UploadFile;
