package org.example.SpringAppServer;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class TestRepository  extends  Exception {

    private final JdbcTemplate jdbcTemplate;

    public TestRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        testConnection();
    }

    public void testConnection() {
        try
        {
            String dbName = jdbcTemplate.queryForObject(
                    "SELECT current_database()", String.class);

            System.out.println("Connected to DB: " + dbName);
        }catch (Exception err) {
            System.out.println(err);
            throw  err;
        }

    }
}
