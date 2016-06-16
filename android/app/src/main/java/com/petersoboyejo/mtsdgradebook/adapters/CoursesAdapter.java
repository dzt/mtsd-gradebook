package com.petersoboyejo.mtsdgradebook.adapters;


import android.content.Context;
import android.widget.ArrayAdapter;
import com.petersoboyejo.mtsdgradebook.R;
import com.petersoboyejo.mtsdgradebook.models.Course;

public class CoursesAdapter extends ArrayAdapter<Course> {

    public CoursesAdapter(Context context) {

        super(context, R.layout.course_list_item);

    }

}
