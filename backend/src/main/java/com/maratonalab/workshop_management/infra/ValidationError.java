package com.maratonalab.workshop_management.infra;

import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

public final class ValidationError extends RestErrorMessage {
    private final List<FieldMessage> errors = new ArrayList<>();

    public ValidationError(HttpStatus status, String message) {
        super(status, message);
    }

    public List<FieldMessage> getErrors() {
        return errors;
    }

    public void addMessageError(String fieldName, String message) {
        errors.add(new FieldMessage(fieldName, message));
    }
}
