package com.maratonalab.workshop_management.infra;

import org.springframework.http.HttpStatus;

public final class RestErrorMessage {
    private HttpStatus status;
    private String message;

    public RestErrorMessage() {}

    public RestErrorMessage(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}