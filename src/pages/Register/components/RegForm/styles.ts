import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 12px 46px 12px;
  background: #fff;

  @media (max-width: 767px) {
    padding: 30px 20px;

    .form-row {
      display: block;
    }

    .form-row .form-wrapper {
      width: 100%;
      margin-bottom: 25px;
    }

    .form-row .form-wrapper:first-child {
      margin-right: 0;
    }
  }
`;
export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 35px;

  color: #3e91f7;
  letter-spacing: 3px;
  margin-bottom: 22px;
  font-weight: 500;
`;

export const Submit = styled.button`
  border: none;
  width: 100%;
  height: 30px;
  margin-top: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  background: #3e91f7;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  position: relative;
  transition: all 0.3s ease;

  span {
    letter-spacing: 3px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  &:hover {
    background: #0072fd;
  }
`;

export const Check = styled.div`
  label {
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 12px;
    width: 13px;
    border-radius: 2px;
    background-color: #ebebeb;
    border: none;
    font-size: 10px;
    font-weight: bolder;
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
      content: "	\2713";
      color: rgba(0, 68, 255, 0.637);
    }
  }
`;
