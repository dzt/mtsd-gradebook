package com.petersoboyejo.mtsdgradebook.activities;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ListView;
import com.petersoboyejo.mtsdgradebook.R;
import com.petersoboyejo.mtsdgradebook.adapters.CoursesAdapter;

public class CoursesActivity extends AppCompatActivity {

    private CoursesAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        setTitle("Classes");

        ListView listView = (ListView) findViewById(R.id.listView);
        listView.setAdapter(mAdapter);

        fetch();
    }

    public void fetch() {

    }

}
