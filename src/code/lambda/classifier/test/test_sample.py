import pytest
from src.lambda_function import lambda_handler

class TestSample: 
    def test_response(self) -> None: 
        mockObject = ""
        mockObject2 = ""
        assert lambda_handler(mockObject, mockObject2) == 200